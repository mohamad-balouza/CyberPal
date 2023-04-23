from app.crud.base import CrudBase
from app.models.schedule import Schedule
from app.schemas.schedule import ScheduleCreate, ScheduleUpdate

class CrudSchedule(CrudBase[Schedule, ScheduleCreate, ScheduleUpdate]):
    pass


schedule = CrudSchedule(Schedule)