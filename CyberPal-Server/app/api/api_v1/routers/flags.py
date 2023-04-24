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

