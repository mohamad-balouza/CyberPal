from fastapi import APIRouter, Depends, HTTPException, status
from typing import Any, List
from sqlalchemy.orm import Session
from app import schemas, crud, models
from app.api import deps 

router = APIRouter()

@router.get("/", response_model=List[schemas.Flag])
def getFlags(db: Session = Depends(deps.getDb), skip: int = 0, limit: int = 100) -> Any:
    flags = crud.flag.getMultiple(db, skip=skip, limit=limit)
    return flags

@router.post("/", response_model=schemas.Flag)
def createFlag(
    db: Session = Depends(deps.getDb),
    *, 
    flag_in: schemas.FlagCreate, 
    current_user: models.User = Depends(deps.getCurrentAdmin)
    ) -> Any:

    flag = crud.flag.create(db, obj_in=flag_in)
    return flag

@router.get("/", response_model=List[schemas.Flag])
def getFlagsByToolId(db: Session = Depends(deps.getDb), *, tool_id: int, skip: int = 0, limit: int = 100) -> Any:
    flags = crud.flag.getMultipleByToolId(db, tool_id=tool_id, skip=skip, limit=limit)
    return flags

@router.get("/get_used", response_model=List[schemas.UsedFlag])
def getUsedFlags(
    db: Session = Depends(deps.getDb), 
    skip: int = 0, 
    limit: int = 100,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        used_flags = crud.used_flag.getMultiple(db, skip=skip, limit=limit)
    else:
        used_flags = crud.used_flag.getMultipleByAuthor(db, user_id=current_user.id, skip=skip, limit=limit)

    return used_flags

@router.post("/save", response_model=schemas.UsedFlag)
def saveFlag(
    db: Session = Depends(deps.getDb),
    *, 
    used_flag_in: schemas.UsedFlagCreate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        used_flags = crud.used_flag.create(db, obj_in=used_flag_in)
    else:
        used_flags = crud.used_flag.createWithAuthor(db, obj_in=used_flag_in, user_id=current_user.id)
        
    return used_flags

@router.get("/get_scheduled", response_model=List[schemas.ScheduledFlag])
def getScheduledFlags(
    db: Session = Depends(deps.getDb), 
    *,
    skip: int = 0, 
    limit: int = 100,
    schedule_id: int,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        scheduled_flags = crud.scheduled_flag.getMultiple(db, skip=skip, limit=limit)
    else:
        scheduled_flags = crud.scheduled_flag.getMultipleByScheduleId(db, schedule_id=schedule_id, skip=skip, limit=limit)

    return scheduled_flags

@router.post("/schedule", response_model=schemas.ScheduledFlag)
def scheduleFlag(
    db: Session = Depends(deps.getDb),
    *, 
    scheduled_flag_in: schemas.ScheduledFlagCreate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    scheduled_flag = crud.scheduled_flag.create(db, obj_in=scheduled_flag_in)
        
    return scheduled_flag