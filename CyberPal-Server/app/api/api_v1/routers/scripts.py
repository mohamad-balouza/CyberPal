from fastapi import APIRouter, Depends, HTTPException, status
from typing import Any, List
from sqlalchemy.orm import Session
from app import schemas, crud, models
from app.api import deps 

router = APIRouter()

@router.get("/", response_model=List[schemas.Script])
def getAllScripts(
    db: Session = Depends(deps.getDb), 
    skip: int = 0, 
    limit: int = 100,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        scripts = crud.script.getMultiple(db, skip=skip, limit=limit)
    else:
        scripts = crud.script.getMultipleByAuthor(db, author_id=current_user.id, skip=skip, limit=limit)

    return scripts

@router.post("/", response_model=schemas.Tool)
def createScript(
    db: Session = Depends(deps.getDb),
    *, 
    script_in: schemas.ScriptCreate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        script = crud.script.create(db, obj_in=script_in)
    else:
        script = crud.script.createWithAuthor(db, obj_in=script_in, author_id=current_user.id)
        
    return script
