from pydantic import BaseModel
from typing import Optional, List


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
    tool: Optional["ToolInDBBase"]


class FlagInDB(FlagInDBBase):
    pass

from app.schemas.tool import ToolInDBBase
Flag.update_forward_refs()