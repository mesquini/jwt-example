var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var jwt = require("jsonwebtoken");

var routes = require("./routes");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan("dev"));

app.use(routes);

var port = process.env.PORT || 5005;

app.listen(port, () => console.log("Aplicação rodando na porta:" + port));
