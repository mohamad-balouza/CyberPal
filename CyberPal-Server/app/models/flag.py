from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class Flag(Base):
    __tablename__ = "flags"

    id = Column(Integer, primary_key=True, index=True)
    flag_name = Column(String, index=True, unique=True)
    flag_description = Column(String)
    tool_id = Column(Integer, ForeignKey("tools.id"), index=True)

    tool = relationship("Tool", back_populates="flags")