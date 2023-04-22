from sqlalchemy import Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from app.database.database import Base

class Schedule(Base):
    __tablename__ = "schedules"

    id = Column(Integer, primary_key=True)
    date_and_time = Column(DateTime, nullable=False)
    schedule_type = Column(String, nullable=False)
    title = Column(String, nullable=False)
    email_contents = Column(String, nullable=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    user_schedule = relationship("User", back_populates="schedules")
    appointed_flags_in_schedule = relationship("ScheduledFlag", back_populates="schedule_appointed")
