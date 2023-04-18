const registerUserService = require('../../../services/login/command/registerUser.post.service');

const registerUserController = async (req, res) => {
  try {
    await registerUserService(req, res);
  } catch (error) {
    console.log(error.message, __filename);
    res.status(500).send();
  }
}

module.exports = registerUserController;
