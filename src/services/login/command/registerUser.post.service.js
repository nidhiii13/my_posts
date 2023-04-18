const { uuid } = require("uuidv4");
const bcrypt = require("bcrypt");

const connection = require("../../../config/database.config");

const registerUserService = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userVal = await connection
      .promise()
      .query("SELECT * FROM users WHERE username = ?", [username]);
    const user = userVal[0];
    if (user.length > 0) {
      res.status(401).send({ msg: "User already exists" });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    await connection
      .promise()
      .query("INSERT INTO users (id, username, password) VALUES (?, ?, ?)", [
        uuid(),
        username,
        hash,
      ]);
    console.log(`USER CREATED with username ${username}`, __filename);
    res.status(200).send({ msg: "User created" });
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = registerUserService;
