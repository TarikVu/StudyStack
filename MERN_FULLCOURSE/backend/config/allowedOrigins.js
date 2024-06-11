// These are the origins that can access our rest api of our server.
// local host for development
// and dandrepair is the stakeholder that requested this application. 
const allowedOrigins = [
    'http://localhost:3000',
    'https://www.dandrepairshop.com',
    'https://dandrepairshop.com'
]

module.exports = allowedOrigins