const express = require("express");
// const { route } = require("../app");
const {home, createUser} = require("../controllers/userControllers")
const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);

module.exports = router;

