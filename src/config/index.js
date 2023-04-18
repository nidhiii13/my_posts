const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    ENV: process.env.ENV,
    PORT: process.env.PORT ?? 8000,
    DBHOST: process.env.DBHOST,
    DBPORT: process.env.DBPORT,
    DBUSER: process.env.DBUSER,
    DBPASSWORD: process.env.DBPASSWORD,
    DATABASE: process.env.DATABASE,
    CONNECTION_LIMIT: process.env.CONNECTION_LIMIT,
    SECRET: process.env.SECRET,
}
