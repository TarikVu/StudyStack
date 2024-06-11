const allowedOrigins = require('./allowedOrigins')

const corsOptions = {

    origin: (origin, callback) => {
        
        // Check if the origin is in our allowed array or if there is no origin.
        // no origin case would be for testing with 3rd party things like postman
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },

    // This property indicates whether the server should include credentials 
    // (such as cookies or HTTP authentication) in the CORS request.
    credentials: true,

    // Setting credentials to true allows credentials to be included in the CORS request.
    optionsSuccessStatus: 200
}

module.exports = corsOptions 