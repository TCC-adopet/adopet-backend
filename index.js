require("dotenv").config();

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require('cors');

var routes = require("./routes/route");

var mongoString = process.env.DATABASE_URL;
var port = process.env.PORT || 3000;

mongoose.connect(mongoString);
var database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("banco de dados conectado");
});

var app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.use(bodyParser.json());
app.use("/api", routes);
app.use(express.json());

app.listen(port, () => {
  console.log(`servidor iniciado na porta: ${port}`);
});