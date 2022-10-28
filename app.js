"use strict";
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const enumRoutes = require("./routes/enum");
const exerciseRoutes = require("./routes/exercise");
const workoutPlanRoutes = require("./routes/workoutPlan");

// Constants
const PORT = process.env.PORT;
const HOST = process.env.HOST;

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
app.use(exerciseRoutes);
app.use(workoutPlanRoutes);

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
  .then(() => app.listen(PORT, HOST))
  .catch((err) => console.error(`Running DB failed: ${err}`));
