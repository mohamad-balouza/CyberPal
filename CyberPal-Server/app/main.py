from fastapi import FastAPI, Depends
from typing_extensions import Annotated
from app.core import config
from functools import lru_cache
from app.database.database import engine
from app.models import Base
from app.api.api_v1.api_routers import api_router
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

# Creating the tables in the database
Base.metadata.create_all(bind=engine)

# @lru_cache()
# def get_settings():
#     return config.Settings()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost", "http://localhost:3000", "http://localhost:8080" "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=config.settings.API_V1_STR)

from app.api.deps import getDb
from sqlalchemy.orm import Session
from app.crud import crud_user_type, crud_user
from app.schemas import user, user_type
from typing import List

@app.get("/user_type", response_model=List[user_type.UserType])
async def getUserTypes(db: Session = Depends(getDb), offset: int = 0, limit: int = 100):
    user_types = crud_user_type.user_type.getMultiple(db, offset=offset, limit=limit)
    return user_types

@app.get("/users", response_model=List[user.User])
async def getUsers(db: Session = Depends(getDb), offset: int = 0, limit: int = 100):
    users = crud_user.user.getMultiple(db, offset=offset, limit=limit)
    return users