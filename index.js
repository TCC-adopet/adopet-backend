require("dotenv").config();

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require('cors');
var cookieParser = require('cookie-parser');

var routes = require("./routes/route");

var token = require("./functions/token");

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
    res.header("Acces-Control-Allow-Headers","Content-Type");
    app.use(cors());
    next();
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", routes);
app.use(express.json());

app.post('/api/logar', async(req,res) => {
  res.send(await token.logar(res,req.body));
});

app.get('/api/deslogar', async(req,res) => {
  res.send(await token.deslogar(res));
});

app.listen(port, () => {
  console.log(`servidor iniciado na porta: ${port}`);
});