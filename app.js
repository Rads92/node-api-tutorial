"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const enumRoutes = require("./routes/enum");

// Constants
const PORT = 8080;

// App
const app = express();

// middlewares
// parse to JSON
app.use(bodyParser.json());
app.use((req, res, next) => {
  // CORS setup
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// routes
app.use(enumRoutes);

app.use((error, req, res, next) => {
  console.error(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message });
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.devaaou.mongodb.net/training-log?retryWrites=true`
  )
  .then(() => app.listen(PORT))
  .catch((err) => console.error(`Running DB failed: ${err}`));
