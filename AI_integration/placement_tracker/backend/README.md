# Express Backend Starter Template

A generic, modular Node.js and Express backend starter template designed for hackathons and rapid backend prototyping.

## Features

- **Express.js**: Lightweight web framework
- **CORS & dotenv**: Cross-Origin Resource Sharing & environment variable configuration
- **Clean Architecture**: Organized separation into `routes`, `controllers`, `services`, and `middlewares`
- **Health Endpoint**: `GET /api/health` returning JSON success response
- **Global Error Handling**: Standardized 404 and Error response handlers

## Project Structure

```
.
├── .env
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── src/
    ├── app.js
    ├── server.js
    ├── config/
    │   └── env.js
    ├── controllers/
    │   └── health.controller.js
    ├── middlewares/
    │   └── errorHandler.js
    ├── routes/
    │   ├── index.js
    │   └── health.routes.js
    └── services/
        └── health.service.js
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### 3. Run Server

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

| Method | Endpoint      | Description           |
| ------ | ------------- | --------------------- |
| GET    | `/api/health` | Health check endpoint |
