const connection = require("../../../config/database.config");

const getAllPostsByIdServiceById = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await connection
      .promise()
      .query(
        "SELECT posts.id,posts.title,posts.content,posts.user_id,users.username,users.id FROM posts, users WHERE users.id=posts.user_id AND posts.user_id = ?",
        [userId]
      );
    res.send(posts[0]);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = getAllPostsByIdServiceById;
