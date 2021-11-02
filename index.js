const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("DB Connected");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.log(error));
