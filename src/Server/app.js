
require('dotenv').config(); // for environment variables
const connectDB = require('./config/database'); 
const userRoutes = require('./routes/users');
let timesheetRoutes = require('./routes/timesheets'); 
const app = require('express')(); // Import the 'app' variable

connectDB(); // Establish database connection

// Middleware ...

// Route registrations
app.use('src/server/routes/users.js', userRoutes);
app.use('src/server/routes/timesheets.js', timesheetRoutes);

timesheetRoutes = require('./routes/timesheets'); // Assuming that the file paths are correct 
app.use('src/server/routes/timesheets.js', timesheetRoutes); // Prefix these routes
// ... start the server (app.listen)