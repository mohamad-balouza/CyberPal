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