FROM python:3.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY Pipfile .
COPY Pipfile.lock .

RUN pip install pipenv && pipenv install --system

COPY . . 

EXPOSE 8000

CMD ["python","manage.py","runserver","0.0.0.0:8000"]

