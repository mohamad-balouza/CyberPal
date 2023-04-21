from pydantic import BaseModel
from typing import Optional, List
from app.schemas import Tool


class FlagBase(BaseModel):
    flag_name: str | None = None
    flag_description: str | None = None
    tool_id: int | None = None

class FlagCreate(FlagBase):
    flag_name: str
    flag_description: str
    tool_id: int

class FlagUpdate(FlagBase):
    pass

class FlagInDBBase(FlagBase):
    id: int | None = None

    class Config:
        orm_mode = True

class Flag(FlagInDBBase):
    tool: Optional[Tool]


class FlagInDB(FlagInDBBase):
    pass
