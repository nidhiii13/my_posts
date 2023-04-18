const mysql = require("mysql2");

// config
const config = require(".");

const { DBHOST, DBPORT, DBUSER, DBPASSWORD, DATABASE, CONNECTION_LIMIT } =
  config;

const connection = mysql.createConnection({
  host: DBHOST,
  user: DBUSER,
  database: DATABASE,
  password: DBPASSWORD,
  port: DBPORT,
});

module.exports = connection;
