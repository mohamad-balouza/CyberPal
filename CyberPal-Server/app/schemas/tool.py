from pydantic import BaseModel, FilePath
from typing import Optional, List, TYPE_CHECKING

if TYPE_CHECKING:
    from app.schemas.flag import Flag

class ToolBase(BaseModel):
    tool_name: str | None = None
    image_url: FilePath | None = None

class ToolCreate(ToolBase):
    tool_name: str
    image_url: FilePath

class ToolUpdate(ToolBase):
    pass

class ToolInDBBase(ToolBase):
    id: int | None = None

    class Config:
        orm_mode = True

class Tool(ToolInDBBase):
    flags: Optional[List["Flag"]]

class ToolInDB(ToolInDBBase):
    pass
