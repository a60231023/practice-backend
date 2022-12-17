require("dotenv").config();
const express = require("express");
const User = require("./models/userModel");

const connectToDB = require("./config/db");
const userRoutes = require("./routes/routes");
const { home, createUser } = require("./controllers/userControllers");
const app = express();

//MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DATEBASE CONNECTION
connectToDB();

//ANY REQUEST COMING WITH / WILL BE GET HERE
// error in code
// app.get("/", userRoutes);
// app.post("/", userRoutes);
app.use("/", userRoutes);

module.exports = app;
