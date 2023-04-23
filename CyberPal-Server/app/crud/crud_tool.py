from app.crud.base import CrudBase
from app.models.tool import Tool
from app.schemas.tool import ToolCreate, ToolUpdate

class CrudTool(CrudBase[Tool, ToolCreate, ToolUpdate]):
    pass


tool = CrudTool(Tool)