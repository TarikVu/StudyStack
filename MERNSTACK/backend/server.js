// Enviroment Variables in .env file
require('dotenv').config();

// Express itself
const express = require('express');
const app = express();

// Used for serving static files or for handling file paths
const path = require('path');

// middle ware (3rd parth & internal)
const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const cookieParser = require('cookie-parser') // 3rd party middleware

// Cross origin resource sharing
const cors = require('cors');
const corsOptions = require('./config/corsOptions');

// Db imports 
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');

// port is set by deployment platform or defaulted 
const PORT = process.env.PORT || 3500

// -------- END OF IMPORTS ---------


// check if .env folder is used correctly
console.log(process.env.NODE_ENV);
connectDB();

// ORDER for app functions matter!

// ------- MOUNTING MIDDLEWARE --------
// These will now have access to req, res and next objects. 
app.use(logger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());


// ------- MOUNTING ROUTE HANDLERS --------
// Static files (images, .css, etc.)
app.use('/', express.static(path.join(__dirname, 'public')));

// tells the app to use the root.js. (on startup this routes to index.html)
app.use('/', require('./routes/root'));

// Handle routing for Models
app.use('/users', require('./routes/userRoutes'))
app.use('/notes', require('./routes/noteRoutes'))

// 404 error handling (catch all case.) 
// Any request that doesnt match the routes will be handeled here
app.all('*', (req, res) => {

    // set the result status code
    res.status(404);

    // send the error based on what the client expects as a response.
    // it could accept html or json. Anything else then a plain 
    // text message is sent for the error.
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }

    else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    }

    else {
        res.type('txt').send('404 Not Found');
    }
})

// Ordering matters.
// emplace error handler here to give all other middleware & route handlers a chance to execute.
app.use(errorHandler);


// ----- CONNECT TO DB -----
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

});


mongoose.connection.on('error', err => {
    console.log(err);

    // Log the events into the mongoErrLog.log file.
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});