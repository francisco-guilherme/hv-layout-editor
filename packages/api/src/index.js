require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

require("./config/express").config(app);
require("./config/swagger").config(app);

app.use(cors());

app.listen(port, err => {
  if (err) throw err;
  console.log(`Layout Editor API ready on port: ${port}`);
});
