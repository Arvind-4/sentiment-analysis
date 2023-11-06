FROM python:3.8-slim-buster

WORKDIR /apps 

COPY ./backend /apps/backend
COPY ./requirements /apps/requirements
COPY ./requirements.txt /apps/requirements.txt
COPY ./commands /apps/commands

RUN python3 -m venv /opt/venv && \
    /opt/venv/bin/pip install pip --upgrade && \
    /opt/venv/bin/pip install -r /apps/requirements.txt && \
    bash /apps/commands/download-nltk-docker.sh && \
    chmod +x /apps/commands/entrypoint.sh

CMD ["/apps/commands/entrypoint.sh"]