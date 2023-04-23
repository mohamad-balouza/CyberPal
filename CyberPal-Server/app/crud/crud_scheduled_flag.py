from app.crud.base import CrudBase
from app.models.scheduled_flag import ScheduledFlag
from app.schemas.scheduled_flag import ScheduledFlagCreate, ScheduledFlagUpdate

class CrudScheduledFlag(CrudBase[ScheduledFlag, ScheduledFlagCreate, ScheduledFlagUpdate]):
    pass


scheduled_flag = CrudScheduledFlag(ScheduledFlag)