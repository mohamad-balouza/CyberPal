from app.crud.base import CrudBase
from app.models.script import Script
from app.schemas.script import ScriptCreate, ScriptUpdate

class CrudScript(CrudBase[Script, ScriptCreate, ScriptUpdate]):
    pass


script = CrudScript(Script)