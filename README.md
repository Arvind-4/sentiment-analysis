# Sentiment Analysis:


## 📦 Tech Stack:

- [FastAPI](https://fastapi.tiangolo.com/)  - FastAPI framework, high performance, easy to learn, fast to code, ready for production.
- [Docker](https://www.docker.com/)  - Docker is a platform designed to help developers build, share, and run modern applications.
- [Next.js](https://nextjs.org/)  - The React Framework  for the Web.
- [Typescript](https://www.typescriptlang.org/)  - JavaScript with syntax for types.
- [Tailwind 3](https://tailwindcss.com/)  - Rapidly build modern websites without ever leaving your HTML.

## Demo:

<img href="https://github.com/Arvind-4/Sentiment-Analysis/blob/main/.github/static/homepage.png?raw=true" alt="Home Page"/>


## Getting Started: 

- Clone Repo 

```bash
mkdir ~/Dev/sentiment-analysis -p
cd ~/Dev/sentiment-analysis
git clone https://github.com/Arvind-4/Sentiment-Analysis.git .
```  

- Install Dependencies (**For Backend**):

```bash
cd ~/Dev/sentiment-analysis
python3.7 -m pip install virtualenv
python3.7 -m virtualenv . 
source bin/activate
pip install -r requirements.txt
```

- Run Dev Server (**For Backend**):

```bash
cd ~/Dev/sentiment-analysis
bash commands/run.sh
```

- Install Dependencies (**For Frontend**):

```bash
cd ~/Dev/sentiment-analysis
npm install
```

- Run Dev Server (**For Frontend**):

```bash
cd ~/Dev/sentiment-analysis
npm run dev
```

### Set Up for Docker

```bash
cd ~/Dev/sentiment-analysis
docker-compose up --build
```

Open [localhost:8000](http://localhost:8000) for backend.
Open [localhost:3000](http://localhost:3000) for frontend.
