from fastapi import FastAPI, Depends
from typing_extensions import Annotated
from app.core import config
from functools import lru_cache
from app.database.database import engine
from app.models import Base
from app.api.api_v1.api_routers import api_router
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(title=config.settings.APP_NAME)

# Creating the tables in the database
Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:1212", "http://localhost:3000", "http://localhost:8080", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=config.settings.API_V1_STR)