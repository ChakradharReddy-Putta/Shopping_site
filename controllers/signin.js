const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error("user not found");
    throw error;
  }
  const isEqual = await bcrypt.compare(password, user.password);
  if (isEqual) {
    res.redirect("/index").json({ message: "login successful" });
  } else {
    res.json({ message: "Wrong password entered" });
    const error = new Error("Wrong password entered");
    throw error;
  }
};

exports.signup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  const user = await User.findOne({ email: email });
  if (user) {
    const error = new Error("email already exist found");
    throw error;
  }
  if (password == confirmpassword) {
    const hashedPw = await bcrypt.hash(password, 15);
    const user = new User({
      email: email,
      password: hashedPw,
    });
    user
      .save()
      .then((result) => {
        console.log("success");
        res.redirect("/index").json({
          message: "successfully created!",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json({ message: "password miss match" });
  }
};

exports.getHome = (req, res, next) => {
  res.render("home", { path: "/home" });
};

exports.getShop = (req, res, next) => {
  res.render("shop", { path: "/shop" });
};

exports.getAbout = (req, res, next) => {
  res.render("about", { path: "/about" });
};

exports.getBlog = (req, res, next) => {
  res.render("blog", { path: "/blog" });
};

exports.getContact = (req, res, next) => {
  res.render("contact", { path: "/Contact" });
};

exports.getCart = (req, res, next) => {
  res.render("cart", { path: "/cart" });
};
