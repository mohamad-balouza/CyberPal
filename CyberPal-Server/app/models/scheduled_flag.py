from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class ScheduledFlag(Base):
    __tablename__ = "scheduled_flags"

    flag_contents = Column(String)
    flag_id = Column(Integer, ForeignKey("flags.id"), primary_key=True)
    schedule_id = Column(Integer, ForeignKey("schedules.id"), primary_key=True)

    schedule_appointed = relationship("Schedule", back_populates="appointed_flags_in_schedule")
    flag_that_was_scheduled = relationship("Flag", back_populates="scheduled_flags")