// routes/testRoutes.js (or userRoutes.js)

const express = require('express');
const User = require('../models/User'); // Import User model

const router = express.Router();

// Create a new dummy user
router.post('/add-dummy-user', async (req, res) => {
  try {
    const newUser = new User({
      name: 'Dummy User',       // Hardcoded for testing
      email: 'dummy@example.com', // Hardcoded email
      password: '123456',         // Hardcoded password
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send success response with the saved user object
    res.status(201).json({
      message: 'User saved',
      user: savedUser,  // Return the saved user (including _id, createdAt, etc.)
    });
  } catch (err) {
    res.status(500).json({ message: 'Error saving user', error: err.message });
  }
});

module.exports = router;
