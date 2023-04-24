from typing import Generator
from app.database.database import SessionLocal
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from jose import jwt, JWTError
from pydantic import ValidationError
from fastapi import Depends, HTTPException, status
from app import models, schemas, crud
from app.core.config import settings 

oauth2_scheme = OAuth2PasswordBearer(tokenUrl=f"{settings.API_V1_STR}/login/access-token")

def getDb() -> Generator:
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()

def getCurrentUser(db: Session = Depends(getDb), token: str = Depends(oauth2_scheme)) -> models.User:
    try:
        payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    user = crud.user.getById(db, id=token_data.sub)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    return user

def getCurrentActiveUser(current_user: models.User = Depends(getCurrentUser),) -> models.User:
    
    if not crud.user.isActive(current_user):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Inactive user")
    return current_user

def getCurrentAdmin(current_user: models.User = Depends(getCurrentUser)) -> models.User:
    
    if not crud.user.isAdmin(current_user):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="The user is not an admin")
    return current_user