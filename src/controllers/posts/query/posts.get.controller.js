const getAllPostsByIdServiceById = require("../../../services/posts/query/posts.get.service");

const getPostController = async (req, res) => {
  try {
    await getAllPostsByIdServiceById(req, res);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = getPostController;
