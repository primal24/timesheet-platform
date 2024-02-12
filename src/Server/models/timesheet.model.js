const mongoose = require('mongoose');
const { parseISO } = require('date-fns');
const { formatDistanceToNow } = require('date-fns');

const timesheetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Referencing the User model
        ref: 'User',
        required: true
    },
    
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    break: {
        type: Number // Duration in minutes
    },
    description: {
        type: String
    },

    totalHours: {
        type: String,
        get: function() { 
            if (this.startTime && this.endTime) {
                const start = parseISO(this.startTime); // Handle string to Date conversion
                const end = parseISO(this.endTime);

                // Calculate difference in seconds
                const durationInSeconds = end.getTime() - start.getTime(); 

                // Use date-fns to format nicely
                return formatDistanceToNow(start, { addSuffix: true, includeSeconds: true }); 
            } else {
                return '00:00';
            }
        }
    
    }
});
 //  Computed 'totalHours' (add error handling in a real application)
 function calculateTotalHours(startTime, endTime) {
    // Replace ... with the appropriate time calculation and formatting code
    return "00:00";
}

// Validation Example 
timesheetSchema.path('date').validate(function (value) {
    const today = new Date();
    return value <= today; // Ensures dates aren't in the future
}, 'Date cannot be in the future');

module.exports = mongoose.model('Timesheet', timesheetSchema);