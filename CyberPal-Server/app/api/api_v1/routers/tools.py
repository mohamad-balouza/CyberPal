from fastapi import APIRouter, Depends, HTTPException, status
from typing import Any, List
from sqlalchemy.orm import Session
from app import schemas, crud, models
from app.api import deps 

router = APIRouter()

@router.get("/", response_model=List[schemas.Tool])
def getTools(db: Session = Depends(deps.getDb), skip: int = 0, limit: int = 100) -> Any:
    tools = crud.tool.getMultiple(db, skip=skip, limit=limit)
    return tools

@router.post("/", response_model=schemas.Tool)
def createTool(
    db: Session = Depends(deps.getDb),
    *, 
    tool_in: schemas.ToolCreate, 
    current_user: models.User = Depends(deps.getCurrentAdmin)
    ) -> Any:

    tool = crud.tool.create(db, obj_in=tool_in)
    return tool

