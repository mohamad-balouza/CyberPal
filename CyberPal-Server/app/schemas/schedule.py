from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

class ScheduleBase(BaseModel):
    date_and_time: datetime | None = None
    schedule_type: str | None = None
    title: str | None = None
    email_contents: str | None = None
    user_id: int | None = None

class ScheduleCreate(ScheduleBase):
    date_and_time: datetime
    schedule_type: str
    title: str
    user_id: int

class ScheduleUpdate(ScheduleBase):
    pass

class ScheduleInDBBase(ScheduleBase):
    id: int | None = None

    class Config:
        orm_mode = True

class Schedule(ScheduleInDBBase):
    user_schedule: Optional["UserInDBBase"]
    appointed_flags_in_schedule: Optional[List["ScheduledFlagInDBBase"]]

class ScheduleInDB(ScheduleInDBBase):
    pass

from app.schemas.user import UserInDBBase
from app.schemas.scheduled_flag import ScheduledFlagInDBBase
Schedule.update_forward_refs()