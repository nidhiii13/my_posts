const connection = require("../../../config/database.config");

const getAllPostsService = async (req, res) => {
  try {
    const [posts] = await connection.promise().query("SELECT title, content, posts.id, users.id, users.username, users.id FROM posts, users where users.id=posts.user_id");
    res.send(posts);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = getAllPostsService;
