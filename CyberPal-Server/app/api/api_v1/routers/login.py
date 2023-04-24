from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from typing import Any
from datetime import timedelta
from app import schemas, crud
from app.api import deps
from app.core.config import settings
from app.core.security import createAccessToken

router = APIRouter()

@router.post("/access-token", response_model=schemas.Token)
def login_access_token(db: Session = Depends(deps.getDb), form_data: OAuth2PasswordRequestForm = Depends()) -> Any:
    user = crud.user.authenticate(db, email=form_data.username, password=form_data.password)

    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Incorrect email or password")
    elif not crud.user.isActive(user):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Inactive user")
    
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    return {
        "access_token": createAccessToken(user.id, expires_delta=access_token_expires),
        "token_type": "bearer",
    }