from fastapi import APIRouter, Depends, HTTPException, status
from typing import Any, List
from sqlalchemy.orm import Session
from app import schemas, crud, models
from app.api import deps 

router = APIRouter()

@router.get("/", response_model=List[schemas.Schedule])
def getAllSchedules(
    db: Session = Depends(deps.getDb), 
    skip: int = 0, 
    limit: int = 100,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        schedules = crud.schedule.getMultiple(db, skip=skip, limit=limit)
    else:
        schedules = crud.schedule.getMultipleByAuthor(db, user_id=current_user.id, skip=skip, limit=limit)

    return schedules

@router.post("/", response_model=schemas.Schedule)
def createSchedule(
    db: Session = Depends(deps.getDb),
    *, 
    schedule_in: schemas.ScheduleCreate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        schedule = crud.schedule.create(db, obj_in=schedule_in)
    else:
        schedule = crud.schedule.createWithAuthor(db, obj_in=schedule_in, user_id=current_user.id)
        
    return schedule

@router.get("/{id}", response_model=schemas.Schedule)
def getScheduleById(
    db: Session = Depends(deps.getDb),
    *, 
    id: int,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    schedule = crud.schedule.getById(db, id=id)

    if not schedule:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Schedule not found")
    elif not crud.user.isAdmin(current_user) and (schedule.user_id != current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")

    return schedule

@router.put("/{id}", response_model=schemas.Schedule)
def updateScheduleById(
    db: Session = Depends(deps.getDb),
    *, 
    id: int,
    schedule_in: schemas.ScheduleUpdate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    schedule = crud.schedule.getById(db, id=id)

    if not schedule:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Schedule not found")
    elif not crud.user.isAdmin(current_user) and (schedule.user_id != current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
    
    schedule = crud.schedule.update(db, db_obj=schedule, obj_in=schedule_in)
    return schedule

@router.delete("/{id}", response_model=schemas.Schedule)
def deleteScheduleById(
    db: Session = Depends(deps.getDb),
    *, 
    id: int,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    schedule = crud.schedule.getById(db, id=id)

    if not schedule:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Schedule not found")
    elif not crud.user.isAdmin(current_user) and (schedule.user_id != current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
    
    schedule = crud.schedule.remove(db, id=id)
    return schedule