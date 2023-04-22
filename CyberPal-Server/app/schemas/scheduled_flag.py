from pydantic import BaseModel
from typing import Optional

class ScheduledFlagBase(BaseModel):
    flag_contents: str | None = None
    flag_id: int | None = None
    schedule_id: int | None = None

class ScheduledFlagCreate(ScheduledFlagBase):
    flag_contents: str
    flag_id: int
    schedule_id: int

class ScheduledFlagUpdate(ScheduledFlagBase):
    pass

class ScheduledFlagInDBBase(ScheduledFlagBase):
    class Config:
        orm_mode = True

class ScheduledFlag(ScheduledFlagInDBBase):
    flag_scheduled: Optional["Flag"]
    schedule: Optional["ScheduleInDBBase"]

class ScheduledFlagInDB(ScheduledFlagInDBBase):
    pass

from app.schemas.flag import Flag
from app.schemas.schedule import ScheduleInDBBase
ScheduledFlag.update_forward_refs()