const express = require("express");
const app = express();
const db = require("./models/index");

app.use(express.json());

app.listen(5707, console.log("servidor rodando"));

app.use("/user", require("./routes/user"));
app.use("/orders", require("./routes/orders"));
app.use("/products", require("./routes/products"));
app.use("/orderproducts", require("./routes/orderproducts"));

db.sequelize.sync();