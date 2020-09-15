const User = require("../models/user");

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });
  if (!user) {
    const error = new Error("user not found");
    throw error;
  }
  if (password == user.password) {
    res.json({ message: "login successful" });
  } else {
    res.json({ message: "Wrong password entered" });
    const error = new Error("Wrong password entered");
    throw error;
  }
};

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
