const bodyParser = require("body-parser");
const express = require("express");
const initServer = require("./src/utils");
const app = express();
const routes = require('./src/routes/index.routes');

// port
const { PORT } = require("./src/config");

initServer();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to my project" });
});

app.use("/", routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
