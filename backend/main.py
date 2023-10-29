import pickle
import subprocess
from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware

from backend.config import get_settings
from backend.schema import FormSchema
from backend.data import get_sentiment

app = FastAPI()
settings = get_settings()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def load_model():
    print("Loading Model...")
    global model
    global vectorizer
    try:
        with open(settings.MODEL_FILE, 'rb') as f:
            model = pickle.load(f)
        with open(settings.VECTOR_FILE, 'rb') as f:
            vectorizer = pickle.load(f)
        print("Model Loadded Successfully :)")
    except Exception as e:
        print("Failed to load model :(")
        print("error", e)


    try:
        command = "python -m nltk.downloader punkt wordnet stopwords".split()
        subprocess.run(command) 
        print("nltk packages downloaded successfully :)")
    except Exception as e:
        print("Failed to download nltk packages :(")
        print("error", e)


@app.post('/api/predict')
def predict(formData: FormSchema, response: Response):
    try:
        review = (formData.review) or None
        if review is None:
            response.status_code = status.HTTP_404_NOT_FOUND
            return {'error': 'Please provide a review'}
        sentiment = get_sentiment(review, model, vectorizer)
        response.status_code = status.HTTP_200_OK
        return {'sentiment': sentiment}
    except Exception as e:
        response.status_code = status.HTTP_500_INTERNAL_SERVER_ERROR
        print(e)
        return {'error': "Something went wrong"}