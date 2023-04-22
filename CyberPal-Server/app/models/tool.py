from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Tool(Base):
    __tablename__ = "tools"

    id = Column(Integer, primary_key=True, index=True)
    tool_name = Column(String, nullable=False, index=True)
    image_url = Column(String, nullable=False)

    flags = relationship("Flag", back_populates="tool")
    # schedule_tools = relationship("Schedule", back_populates="tools_in_schedule")