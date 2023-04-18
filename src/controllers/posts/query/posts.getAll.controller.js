const getAllPostsService = require("../../../services/posts/query/posts.getAll.service");

const getAllPostsController = async (req, res) => {
  try {
    await getAllPostsService(req, res);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = getAllPostsController;
