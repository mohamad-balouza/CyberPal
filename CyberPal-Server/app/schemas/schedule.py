from pydantic import BaseModel, FutureDate
from typing import Optional, List
from app.schemas.user import User
from app.schemas.scheduled_flag import ScheduledFlag

class ScheduleBase(BaseModel):
    date_and_time: FutureDate | None = None
    schedule_type: str | None = None
    title: str | None = None
    email_contents: str | None = None
    user_id: int | None = None

class ScheduleCreate(ScheduleBase):
    date_and_time: FutureDate
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
    user_schedule: Optional[User]
    appointed_flags_in_schedule: Optional[List[ScheduledFlag]]

class ScheduleInDB(ScheduleInDBBase):
    pass
