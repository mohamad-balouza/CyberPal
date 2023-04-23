from app.core.config import settings
from passlib.context import CryptContext
from datetime import timedelta, datetime
from typing import Any
from jose import jwt


pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def getPasswordHash(password: str) -> str:
    return pwd_context.hash(password)

def verifyPassword(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def createAccessToken(subject: Any, expires_delta: timedelta = None) -> str:

    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode = {"exp": expire, "sub": str(subject)}
    encoded_jwt = jwt.encode(to_encode, settings.JWT_SECRET_KEY, algorithm=settings.JWT_ALGORITHM)
    return encoded_jwt