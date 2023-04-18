const loginPostService = require("../../../services/login/command/login.post.service");

const loginPostController = async (req, res) => {
  try {
    await loginPostService(req, res);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
};

module.exports = loginPostController;
