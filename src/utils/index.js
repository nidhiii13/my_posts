const connection = require("../config/database.config");
const { postsCreation, usersCreation } = require("../sql/createTables");

const initServer = () => {
  connection.connect((err) => {
    if (err) {
      console.log(err);
      return;
    }
    connection.query(usersCreation, function (err, results, fields) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log("Users table existed or created");
    });
    connection.query(postsCreation, function (err, results, fields) {
      if (err) {
        console.log(err.message);
        return;
      }
      console.log("Posts table existed or created");
    });
    console.log("Connected to database");
  });

  // connect();
};

module.exports = initServer;
