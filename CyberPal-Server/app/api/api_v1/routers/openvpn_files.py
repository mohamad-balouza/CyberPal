from fastapi import APIRouter, Depends, HTTPException, status
from typing import Any, List
from sqlalchemy.orm import Session
from app import schemas, crud, models
from app.api import deps 

router = APIRouter()

@router.get("/", response_model=List[schemas.OpenvpnFile])
def getAllOpenvpnFiles(
    db: Session = Depends(deps.getDb), 
    skip: int = 0, 
    limit: int = 100,
    current_user: models.User = Depends(deps.getCurrentActiveUser)
    ) -> Any:

    if crud.user.isAdmin(current_user):
        openvpn_files = crud.openvpn_file.getMultiple(db, skip=skip, limit=limit)
    else:
        openvpn_files = crud.openvpn_file.getMultipleByAuthor(db, user_id=current_user.id, skip=skip, limit=limit)

    return openvpn_files