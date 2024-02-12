const express = require('express');
const router = express.Router();
const User = require('../models/user.model'); // Assuming your User model  
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@fh-joanneum\.at$/; // Strict email domain check
    return emailRegex.test(email);
};

// Registration:
router.post('/register', async (req, res) => {
    const {workerId,FirstName,LastName, email, password, employeeCapacity, department,institution,role } = req.body;
    if (!validateEmail(req.body.email)) {
        return res.status(400).json({ error: 'Must use @fh-joanneum.at email address' });
    }

    // 1. Basic Validation (you should enhance this!)
    if (!workerId||FirstName||LastName||email||password||employeeCapacity||department||institution||role ) { 
        return res.status(400).json({ error: 'Please provide all fields' });
    }

    // 2. Check for Existing User
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'Email already in use' });
    }

    // 3. Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 4. Create User 
    try {
        const newUser = await User.create({
            workerId,
            FirstName,
            LastName,
            email,
            password: hashedPassword,
            employeeCapacity,
            department,
            institution,
            role,
        });
        res.status(201).json({ message: 'User created successfully'}); 
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login: 
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!validateEmail(req.body.email)) {
        return res.status(400).json({ error: 'Must use @fh-joanneum.at email address' });
    }

    // 1. Basic Validation
    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    // 2. Find User 
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    // 3. Compare Password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ error: 'Invalid credentials' });
    }

    // 4. Generate JWT 
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h' 
    }); 

    res.json({ token });
});

module.exports = router;
