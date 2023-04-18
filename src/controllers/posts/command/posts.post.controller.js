const postPostService = require("../../../services/posts/command/posts.post.service");

const postPostController = async (req, res) => {
  try {
    await postPostService(req, res);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = postPostController;
