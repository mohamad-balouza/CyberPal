from app.crud.base import CrudBase
from app.models.schedule import Schedule
from app.schemas.schedule import ScheduleCreate, ScheduleUpdate
from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from typing import List

class CrudSchedule(CrudBase[Schedule, ScheduleCreate, ScheduleUpdate]):
    def createWithAuthor(self, db: Session, *, obj_in: ScheduleCreate, user_id: int) -> Schedule:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data, user_id=user_id)
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj



schedule = CrudSchedule(Schedule)