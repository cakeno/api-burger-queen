const express = require('express')
const app = express();
const db = require('./models/index')
const hostname = '127.0.0.1';
const port = 1202;


app.use("/orders", require("./routes/orders"))
app.use("/menu", require("./routes/menu"))
app.use("/user", require("./routes/user"))

app.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`));

db.sequelize.sync();