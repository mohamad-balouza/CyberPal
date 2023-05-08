from pydantic import BaseModel
from typing import Optional, List

class ScriptBase(BaseModel):
    script_title: str | None = None
    script_content: str | None = None
    author_id: int | None = None

class ScriptCreate(ScriptBase):
    script_title: str
    script_content: str

class ScriptUpdate(ScriptBase):
    pass

class ScriptInDBBase(ScriptBase):
    id: int | None = None

    class Config:
        orm_mode = True

class Script(ScriptInDBBase):
    author: Optional["UserInDBBase"]


class ScriptInDB(ScriptInDBBase):
    pass

from app.schemas.user import UserInDBBase
Script.update_forward_refs()