var { Router } = require("express");
var routes = new Router();
const SessionCotroller = require("./controllers/SessionController");
const authMiddlewares = require("./middlewares/auth");

routes.post("/session", SessionCotroller.session);

routes.use(authMiddlewares);

routes.get("/", function (req, res) {
  return res.json({ message: "Node.js com JWT e Hash na senha" });
});

module.exports = routes;
