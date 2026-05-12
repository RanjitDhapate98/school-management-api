# School Management API

A Node.js and MySQL based REST API for managing school data.

---

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

## Live Deployment

Base URL:

https://school-management-api-raxr.onrender.com

### Live API Endpoints

#### Add School API
POST `/api/addSchool`

#### List Schools API
GET `/api/listSchools?latitude=18.5204&longitude=73.8567`

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

#### Example Response

```json
{
  "success": true,
  "message": "School added successfully"
}
```

---

### List Schools

GET `/api/listSchools?latitude=18.5204&longitude=73.8567`

#### Example Response

```json
{
  "success": true,
  "count": 1,
  "schools": [
    {
      "id": 1,
      "name": "City Public School",
      "address": "Pune",
      "latitude": 18.5204,
      "longitude": 73.8567
    }
  ]
}
```

---

## Run Locally

### Install dependencies

```bash
npm install
```

### Start server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=school_management
DB_PORT=3306
```

---

## Project Structure

```bash
school-management-api/
│
├── controllers/
├── middleware/
├── routes/
├── config/
├── server.js
├── package.json
└── README.md
```

---

## Author

Ranjit Dhapate
