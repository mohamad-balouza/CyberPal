from app.crud.base import CrudBase
from app.models.used_flag import UsedFlag
from app.schemas.used_flag import UsedFlagCreate, UsedFlagUpdate

class CrudUsedFlag(CrudBase[UsedFlag, UsedFlagCreate, UsedFlagUpdate]):
    pass


used_flag = CrudUsedFlag(UsedFlag)