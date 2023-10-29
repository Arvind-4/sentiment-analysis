from pathlib import Path
from functools import lru_cache
from pydantic import BaseModel

class Settings(BaseModel):
    BASE_DIR: Path = Path(__file__).resolve().parent
    MODEL_FILE_NAME: str = "model.pkl"
    MODEL_FILE: Path = BASE_DIR / "model" / "predict" / MODEL_FILE_NAME
    VECTOR_FILE_NAME: str = "vectorizer.pkl"
    VECTOR_FILE: Path = BASE_DIR / "model" / "vectorizer" / VECTOR_FILE_NAME

@lru_cache
def get_settings():
    return Settings()