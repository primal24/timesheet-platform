const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new mongoose.Schema({
    // ... (your existing fields) - name, email, password, etc. 
    workerId: {
        type: String,
        required: true,
        unique: true 
    },
    FirstName: {
        type: String,
        required: true,
        unique: true 
    },
    LastName: {
        type: String,
        required: true,
        unique: true 
    },
    email: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true,
        unique: true 
    },
    employmentCapacity: {
        type: String,  
        enum: ['20%', '30%', '50%', '75%', '100%'],
        required: true 
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department' // Assuming a Department model
    },
    institution: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Institution' // Assuming an Institution model
    },
    role: {
        type: String,
        enum: ['employee', 'manager'],
        required: true
    },
    // ... isRegistered or any other flags as needed ... 
});

// Hash password before saving (using a pre-save hook)
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash if modified

    // Hashing - adjust salt rounds for production 
    this.password = await bcrypt.hash(this.password, 10); 
    next();
});
module.exports = mongoose.model('User', userSchema);
