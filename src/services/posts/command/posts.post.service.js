const connection = require("../../../config/database.config");
const { uuid } = require("uuidv4");

const postPostService = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = res.locals.userId;
    await connection
      .promise()
      .query(
        "INSERT INTO posts (id, title, content, user_id) VALUES (?, ?, ?, ?)",
        [uuid(), title, content, userId]
      );
    console.log(`POST Created for user ${userId}`);
    res.status(200).send({ msg: "Post created" });
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = postPostService;
