# School Management API

A Node.js and MySQL based REST API for managing school data.

## Features

- Add new schools
- Fetch schools sorted by proximity
- Input validation
- MySQL database integration
- RESTful API architecture

---

## Tech Stack

- Node.js
- Express.js
- MySQL
- express-validator

---

## API Endpoints

### Add School

POST `/api/addSchool`

#### Request Body

```json
{
    "name": "City Public School",
    "address": "Pune",
    "latitude": 18.5204,
    "longitude": 73.8567
}
```

---

### List Schools

GET `/api/listSchools?latitude=18.5204&longitude=73.8567`

---

## Run Locally

Install dependencies

```bash
npm install
```

Start server

```bash
npm run dev
```

---

## Environment Variables

Create `.env`

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306
```