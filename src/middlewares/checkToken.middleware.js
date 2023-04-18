const jwt = require("jsonwebtoken");
const config = require("../config");
const { SECRET } = config;

const checkToken = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers.authorization;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Auth token is not supplied",
    });
  }
  try {
    const decoded = jwt.verify(token, SECRET);
    res.locals.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token is not valid",
    });
  }
};

module.exports = checkToken;
