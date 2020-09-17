const express = require("express");
const path = require("path");
const controller = require("../controllers/signin");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/auth", (req, res, next) => {
  res.render("auth", { path: "/auth" });
});

router.post("/signup", controller.signup);

router.post("/login", controller.login);

router.get("/home", controller.getHome);

router.get("/shop", controller.getShop);

router.get("/about", controller.getAbout);

router.get("/blog", controller.getBlog);

router.get("/contact", controller.getContact);

router.get("/cart", controller.getCart);

router.post("/contactform", shopController.getcontact);

module.exports = router;
