FROM python:3.10.7-slim-buster
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
RUN python -c "import nltk; nltk.download('punkt')"
COPY . .
CMD ["python", "main.py"]