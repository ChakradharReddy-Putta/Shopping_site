const User = require("../models/user");

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;
  if (password == confirmpassword) {
    const user = new User({
      email: email,
      password: password,
      confirmpassword: confirmpassword,
    });
    user
      .save()
      .then((result) => {
        console.log("success");
        res.json({ message: "successfully created!" });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json({ message: "password miss match" });
  }
};
