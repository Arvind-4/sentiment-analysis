#!/bin/bash

APP_PORT=${PORT:-8000}
WORKERS=${WORKERS:-20}

/opt/venv/bin/gunicorn -k uvicorn.workers.UvicornWorker --workers ${WORKERS} --bind 0.0.0.0:${APP_PORT} backend.main:app