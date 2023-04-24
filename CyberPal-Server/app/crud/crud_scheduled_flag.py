from app.crud.base import CrudBase
from app.models.scheduled_flag import ScheduledFlag
from app.schemas.scheduled_flag import ScheduledFlagCreate, ScheduledFlagUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudScheduledFlag(CrudBase[ScheduledFlag, ScheduledFlagCreate, ScheduledFlagUpdate]):
    def getMultipleByScheduleId(self, db: Session, *, schedule_id: int, skip: int = 0, limit: int = 100) -> List[ScheduledFlag]:
        return db.query(self.model).filter(ScheduledFlag.schedule_id == schedule_id).offset(skip).limit(limit).all()


scheduled_flag = CrudScheduledFlag(ScheduledFlag)