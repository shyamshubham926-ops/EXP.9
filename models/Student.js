const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address']
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    trim: true,
    enum: {
      values: ['Computer Science', 'Engineering', 'Business Administration', 'Medicine', 'Law', 'Arts', 'Other'],
      message: '{VALUE} is not a valid course'
    }
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [16, 'Age must be at least 16'],
    max: [100, 'Age cannot exceed 100']
  }
}, {
  timestamps: true
});

// Create indexes for better query performance
// Note: email index is automatically created by unique: true
studentSchema.index({ course: 1 });
studentSchema.index({ age: 1 });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;