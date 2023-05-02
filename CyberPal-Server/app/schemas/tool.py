from pydantic import BaseModel, FilePath
from typing import Optional, List

class ToolBase(BaseModel):
    tool_name: str | None = None
    image_url: str | None = None

class ToolCreate(ToolBase):
    tool_name: str
    image_url: str

class ToolUpdate(ToolBase):
    pass

class ToolInDBBase(ToolBase):
    id: int | None = None

    class Config:
        orm_mode = True

class Tool(ToolInDBBase):
    flags: Optional[List["FlagInDBBase"]]

class ToolInDB(ToolInDBBase):
    pass


from app.schemas.flag import FlagInDBBase
Tool.update_forward_refs()