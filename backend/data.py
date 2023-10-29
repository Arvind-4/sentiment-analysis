from backend.processing import preprocessing


def get_sentiment(review: str, model: object, vectorizer: object) -> str:
    processed_review = preprocessing(review)
    input_data = vectorizer.transform([' '.join(processed_review)])
    prediction = model.predict(input_data)
    if prediction[0] == 1:
        return 'positive'
    else:
        return 'negative'