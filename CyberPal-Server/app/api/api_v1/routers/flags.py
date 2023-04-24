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