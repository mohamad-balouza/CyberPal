from app.crud.base import CrudBase
from app.models.flag import Flag
from app.schemas.flag import FlagCreate, FlagUpdate

class CrudFlag(CrudBase[Flag, FlagCreate, FlagUpdate]):
    pass


flag = CrudFlag(Flag)