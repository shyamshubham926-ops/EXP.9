const express = require('express');
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  getStudentById
} = require('../controllers/studentController');

// @route   POST /api/students
// @desc    Create a new student
router.post('/', createStudent);

// @route   GET /api/students
// @desc    Get all students
router.get('/', getAllStudents);

// @route   GET /api/students/:id
// @desc    Get a single student by ID
router.get('/:id', getStudentById);

// @route   PUT /api/students/:id
// @desc    Update a student
router.put('/:id', updateStudent);

// @route   DELETE /api/students/:id
// @desc    Delete a student
router.delete('/:id', deleteStudent);

module.exports = router;