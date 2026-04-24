# Student Management System - MongoDB CRUD Operations

## Experiment 9: Node.js + Express + MongoDB CRUD Application

This project is a complete RESTful API for managing student records using Node.js, Express, and MongoDB with Mongoose ODM. It implements all four CRUD operations (Create, Read, Update, Delete) as required for the experiment.

## Features

- ✅ Complete CRUD operations (POST, GET, PUT, DELETE)
- ✅ MongoDB database connection with Mongoose
- ✅ Data validation and error handling
- ✅ RESTful API design with proper status codes
- ✅ CORS enabled for cross-origin requests
- ✅ Environment variable configuration
- ✅ Postman testing ready

## Project Structure

```
├── server.js          # Main Express server
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
├── .gitignore        # Git ignore file
├── README.md         # This documentation
├── controllers/
│   └── studentController.js  # Business logic for CRUD operations
├── models/
│   └── Student.js    # Mongoose schema and model
└── routes/
    └── studentRoutes.js  # API route definitions
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local instance or MongoDB Atlas)
- Postman (for API testing)

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory (or use the provided one) with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/student_management
   NODE_ENV=development
   ```
4. Start MongoDB locally or update `MONGODB_URI` to your MongoDB Atlas connection string.

## Running the Application

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### 1. Create a Student
- **URL:** `POST /api/students`
- **Description:** Create a new student record
- **Request Body (JSON):**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "course": "Computer Science",
    "age": 22
  }
  ```
- **Success Response:** `201 Created`
  ```json
  {
    "success": true,
    "message": "Student created successfully",
    "data": {
      "_id": "60f7b3b4c9e8a40015a1b2c3",
      "name": "John Doe",
      "email": "john@example.com",
      "course": "Computer Science",
      "age": 22,
      "createdAt": "2026-04-24T06:40:00.000Z",
      "updatedAt": "2026-04-24T06:40:00.000Z"
    }
  }
  ```

### 2. Get All Students
- **URL:** `GET /api/students`
- **Description:** Retrieve all student records
- **Success Response:** `200 OK`
  ```json
  {
    "success": true,
    "count": 3,
    "data": [
      {
        "_id": "60f7b3b4c9e8a40015a1b2c3",
        "name": "John Doe",
        "email": "john@example.com",
        "course": "Computer Science",
        "age": 22,
        "createdAt": "2026-04-24T06:40:00.000Z",
        "updatedAt": "2026-04-24T06:40:00.000Z"
      }
    ]
  }
  ```

### 3. Get Single Student
- **URL:** `GET /api/students/:id`
- **Description:** Retrieve a specific student by ID
- **Success Response:** `200 OK`
  ```json
  {
    "success": true,
    "data": {
      "_id": "60f7b3b4c9e8a40015a1b2c3",
      "name": "John Doe",
      "email": "john@example.com",
      "course": "Computer Science",
      "age": 22,
      "createdAt": "2026-04-24T06:40:00.000Z",
      "updatedAt": "2026-04-24T06:40:00.000Z"
    }
  }
  ```

### 4. Update a Student
- **URL:** `PUT /api/students/:id`
- **Description:** Update an existing student record
- **Request Body (JSON):**
  ```json
  {
    "name": "John Smith",
    "age": 23
  }
  ```
- **Success Response:** `200 OK`
  ```json
  {
    "success": true,
    "message": "Student updated successfully",
    "data": {
      "_id": "60f7b3b4c9e8a40015a1b2c3",
      "name": "John Smith",
      "email": "john@example.com",
      "course": "Computer Science",
      "age": 23,
      "createdAt": "2026-04-24T06:40:00.000Z",
      "updatedAt": "2026-04-24T06:45:00.000Z"
    }
  }
  ```

### 5. Delete a Student
- **URL:** `DELETE /api/students/:id`
- **Description:** Delete a student record
- **Success Response:** `200 OK`
  ```json
  {
    "success": true,
    "message": "Student deleted successfully",
    "data": {
      "_id": "60f7b3b4c9e8a40015a1b2c3",
      "name": "John Doe",
      "email": "john@example.com",
      "course": "Computer Science",
      "age": 22,
      "createdAt": "2026-04-24T06:40:00.000Z",
      "updatedAt": "2026-04-24T06:40:00.000Z"
    }
  }
  ```

## Error Responses

### Validation Error (400)
```json
{
  "success": false,
  "message": "Validation error",
  "errors": ["Name must be at least 2 characters long", "Please provide a valid email address"]
}
```

### Not Found (404)
```json
{
  "success": false,
  "message": "Student not found"
}
```

### Duplicate Email (400)
```json
{
  "success": false,
  "message": "Student with this email already exists"
}
```

### Server Error (500)
```json
{
  "success": false,
  "message": "Server error",
  "error": "Error message details"
}
```

## Data Validation Rules

- **name:** Required, 2-50 characters
- **email:** Required, unique, valid email format
- **course:** Required, must be one of: Computer Science, Engineering, Business Administration, Medicine, Law, Arts, Other
- **age:** Required, between 16 and 100

## Postman Testing

1. Import the provided `Student-Management-System.postman_collection.json` into Postman
2. Set up environment variables in Postman if needed
3. Test each endpoint with sample data

### Test Data Examples:
```json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "course": "Engineering",
  "age": 21
}
```

```json
{
  "name": "Bob Wilson",
  "email": "bob@example.com",
  "course": "Business Administration",
  "age": 24
}
```

## MongoDB Connection

The application uses MongoDB as the database. You can use:
1. **Local MongoDB:** Install MongoDB locally and run `mongod`
2. **MongoDB Atlas:** Create a free cluster and update the connection string in `.env`

Example MongoDB Atlas connection string:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/student_management?retryWrites=true&w=majority
```

## Dependencies

- **express:** Web framework for Node.js
- **mongoose:** MongoDB object modeling
- **dotenv:** Environment variable management
- **cors:** Cross-origin resource sharing
- **nodemon:** Development server with auto-restart

## Implementation Details

This experiment successfully demonstrates:

1. **Express server setup** with middleware configuration
2. **MongoDB connection** using Mongoose with error handling
3. **CRUD operations** with proper RESTful API design
4. **Data validation** at both schema and controller levels
5. **Error handling** for various scenarios (validation, duplicates, not found, server errors)
6. **Postman testing** with appropriate status codes and JSON responses

## Screenshots for Submission

When submitting this experiment, include screenshots of:

1. **Postman testing** for each endpoint (POST, GET, PUT, DELETE)
2. **Successful responses** with status codes (201, 200)
3. **Error responses** (400, 404, 500)
4. **MongoDB database** showing the created records

## Author

Student Management System - Experiment 9
Full Stack Development Course

## License

This project is created for educational purposes as part of the experiment requirements.