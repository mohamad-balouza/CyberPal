from pydantic import BaseModel
from typing import Optional
from app.schemas import Flag, Schedule

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
    flag_scheduled: Optional[Flag]
    schedule: Optional[Schedule]

class ScheduledFlagInDB(ScheduledFlagInDBBase):
    pass
