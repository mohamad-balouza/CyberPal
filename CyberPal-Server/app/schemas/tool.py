from pydantic import BaseModel
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
    pass    

class ToolInDB(ToolInDBBase):
    pass
