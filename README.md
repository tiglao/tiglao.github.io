# Tiglao Portfolio

What's underneath my portfolio website.

## Tech Stack

### Frontend

- React 18.2.0
- React Bootstrap 2.8.0
- Bootstrap 5.3.2
- Vite 4.4.5
- React Router DOM 6.16.0

### Backend

- FastAPI 0.103.1
- Pydantic 2.3.0
- Pymongo 4.5.0
- Uvicorn 0.23.2

### DevOps

- Docker
- Docker Compose

## Requirements

- Docker and Docker Compose installed
- Node.js and npm/yarn installed
- Python 3.x installed

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/portfolio-template.git
cd portfolio-template
```

### Environment Variables

Duplicate the `.env.example` file for each service (frontend and backend) and fill in the necessary environment variables.

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. **Navigate to the project directory**

    ```bash
    cd your-repo-name
    ```

3. **Environment Variables**

    - Copy `.env.example` to `.env` and fill in the necessary environment variables

4. **Build and Run Containers**

    ```bash
    docker-compose up --build
    ```

    This will build and start the frontend, backend, and MongoDB services. Your frontend will be accessible at `http://localhost:3000` and your backend API will be at `http://localhost:8000`.

5. **Mongo Express (Optional)**

    If you'd like to use Mongo Express for database management, it will be available at `http://localhost:8082`.

### To stop the services

```bash
docker-compose down
```
