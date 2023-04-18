const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const connection = require("../../../config/database.config");
const config = require("../../../config");
const { SECRET } = config;

const loginPostService = async (req, res) => {
  const { username, password } = req.body;
  const userVal = await connection
    .promise()
    .query("SELECT * FROM users WHERE username = ?", [username]);
  const user = userVal[0];
  if (user.length === 0) {
    res
      .status(401)
      .send({
        msg: "Something went wrong. Please Check your username or password",
      });
    return;
  }
  const match = await bcrypt.compare(password, user[0].password);
  if (!match) {
    res
      .status(401)
      .send({
        msg: "Something went wrong. Please Check your username or password",
      }); // never put specific message that password is incorrect
    return;
  }
  const token = jwt.sign({ id: user[0].id }, SECRET, { expiresIn: "1h" });
  res.send({ token, userId: user[0].id });
};

module.exports = loginPostService;
