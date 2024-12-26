require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/gomycode", (req, res) => {
  res.send("Hello Gomycode!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
