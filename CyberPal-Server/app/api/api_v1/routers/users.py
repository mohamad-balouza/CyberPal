from fastapi import APIRouter, Depends, HTTPException, status
from typing import Any, List
from sqlalchemy.orm import Session
from app import schemas, crud, models
from app.api import deps 

router = APIRouter()

@router.get("/", response_model=List[schemas.User])
def getUsers(db: Session = Depends(deps.getDb), skip: int = 0, limit: int = 100) -> Any:

    users = crud.user.getMultiple(db, skip=skip, limit=limit)
    return users

@router.post("/", response_model=schemas.User)
def createUser(db: Session = Depends(deps.getDb), *, user_in: schemas.UserCreate) -> Any:

    user = crud.user.getByEmail(db, email=user_in.email)
    if user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="The user with this email already exists in the system")
    
    user = crud.user.create(db, obj_in=user_in)
    return user

@router.get("/me", response_model=schemas.User)
def getCurrentUser(db: Session = Depends(deps.getDb), current_user: models.User = Depends(deps.getCurrentActiveUser)) -> Any:
    return current_user

@router.get("/{user_id}", response_model=schemas.User)
def getUserById(user_id: int, db: Session = Depends(deps.getDb)) -> Any:

    user = crud.user.getById(db, id=user_id)    
    return user

@router.put("/{user_id}", response_model=schemas.User)
def updateUserById(
    *,
    db: Session = Depends(deps.getDb),
    user_id: int,
    user_in: schemas.UserUpdate,
    current_user: models.User = Depends(deps.getCurrentAdmin),
) -> Any:
    
    user = crud.user.getById(db, id=user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="The user with this id does not exist in the system")
    
    user = crud.user.update(db, db_obj=user, obj_in=user_in)
    return user

@router.delete("/{user_id}", response_model=schemas.User)
def deleteUserById(db: Session = Depends(deps.getDb), *, user_id: int, current_user: models.User = Depends(deps.getCurrentAdmin)) -> Any:

    user = crud.user.getById(db, id=user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="The user with this id does not exist in the system")

    user = crud.user.remove(db, id=user_id)
    return user