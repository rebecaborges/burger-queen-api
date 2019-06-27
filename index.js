const express = require("express");
const app = express();
const db = require("./models/index");

app.listen(3666, console.log("servidor rodando"));

db.sequelize.sync();