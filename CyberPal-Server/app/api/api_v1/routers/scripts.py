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

@router.post("/", response_model=schemas.Script)
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

@router.put("/{id}", response_model=schemas.Script)
def updateScriptById(
    db: Session = Depends(deps.getDb),
    *, 
    id: int,
    script_in: schemas.ScriptUpdate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    script = crud.script.getById(db, id=id)

    if not script:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Script not found")
    elif not crud.user.isAdmin(current_user) and (script.author_id != current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
    
    script = crud.script.update(db, db_obj=script, obj_in=script_in)
    return script

@router.delete("/{id}", response_model=schemas.Script)
def deleteScriptById(
    db: Session = Depends(deps.getDb),
    *, 
    id: int,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    script = crud.script.getById(db, id=id)

    if not script:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Script not found")
    elif not crud.user.isAdmin(current_user) and (script.author_id != current_user.id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Not authorized")
    
    script = crud.script.remove(db, id=id)
    return script
