const express = require("express");
const router = express.Router();
const {
  LOGIN,
  REGISTER,
  POSTS,
  POSTSBYID,
  NEWPOST,
} = require("../constants/routes.constants");

const postPostController = require("../controllers/posts/command/posts.post.controller");
const getPostController = require("../controllers/posts/query/posts.get.controller");
const getAllPostsController = require("../controllers/posts/query/posts.getAll.controller");
const registerUserController = require("../controllers/login/command/registerUser.post.controller");
const loginUserPostController = require("../controllers/login/command/loginUser.post.controller");
const checkToken = require("../middlewares/checkToken.middleware");

router.post(REGISTER, registerUserController);
router.post(LOGIN, loginUserPostController);
router.get(POSTS + POSTSBYID, getPostController);
router.get(POSTS, getAllPostsController);
router.post(POSTS + NEWPOST, checkToken, postPostController);

module.exports = router;
