"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const feedRoutes = require("./routes/feed");

// Constants
const PORT = 8080;

// App
const app = express();

// middlewares
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "GET, POST, PUT, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// routes
app.use("/feed", feedRoutes);

app.listen(PORT);
