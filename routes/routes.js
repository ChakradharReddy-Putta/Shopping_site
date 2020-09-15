const express = require("express");
const path = require("path");
const controller = require("../controllers/signin");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("index", { path: "/index" });
});

router.post("/signup", controller.signup);

router.post("/login", controller.login);

module.exports = router;
