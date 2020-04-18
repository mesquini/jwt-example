var User = require("../models/user");
var jwt = require("jsonwebtoken");

module.exports = {
  async session(req, res) {
    var usuario = new User();

    if (
      req.body.username !== "mesquini" ||
      !(await usuario.checkPassword(req.body.password))
    ) {
      res.json({ success: false, message: "Usuário ou senha incorreto(s)!" });
    } else {
      (usuario.name = "mesquini"), (usuario.admin = true);

      var token = jwt.sign({ usuario }, "batman batman batman", {
        expiresIn: "2d",
      });

      res.json({
        success: true,
        message: "Token criado!!!",
        toke: token,
      });
    }
  },
};
