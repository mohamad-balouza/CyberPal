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

@router.get("/getfav", response_model=List[schemas.FavoriteScript])
def getAllFavorites(
    db: Session = Depends(deps.getDb), 
    skip: int = 0, 
    limit: int = 100,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        favorite_scripts = crud.favorite_script.getMultiple(db, skip=skip, limit=limit)
    else:
        favorite_scripts = crud.favorite_script.getMultipleByAuthor(db, user_who_favorited_id=current_user.id, skip=skip, limit=limit)

    return favorite_scripts

@router.post("/favorite", response_model=schemas.FavoriteScript)
def favoriteScript(
    db: Session = Depends(deps.getDb),
    *, 
    favorite_script_in: schemas.FavoriteScriptCreate, 
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        favorite_script = crud.favorite_script.create(db, obj_in=favorite_script_in)
    else:
        favorite_script = crud.favorite_script.createWithAuthor(db, obj_in=favorite_script_in, user_who_favorited_id=current_user.id)
        
    return favorite_script

@router.delete("/unfavorite", response_model=schemas.FavoriteScript)
def unfavoriteScript(
    db: Session = Depends(deps.getDb),
    *, 
    script_favorited_id: int,
    user_who_favorited_id: int | None = None,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        favorite_script = crud.favorite_script.remove(db, user_who_favorited_id=user_who_favorited_id, script_favorited_id=script_favorited_id)
    else:
        favorite_script = crud.favorite_script.remove(db, user_who_favorited_id=current_user.id, script_favorited_id=script_favorited_id)
        
    return favorite_script

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

@router.get("/{id}", response_model=schemas.Script)
def getScriptById(
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