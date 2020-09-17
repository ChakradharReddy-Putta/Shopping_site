const Contact = require("../models/contact");
const nodemailer = require("nodemailer");
const { getMaxListeners } = require("../models/contact");
const Subscription = require("../models/subscription");

exports.getcontact = async (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ldragotechs@gmail.com",
      pass: "Ldragotechs@7",
    },
  });

  const contact = new Contact({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
  contact
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/contact");
      transporter.sendMail({
        from: "ldragotechs@gmail.com",
        to: email,
        subject: "Vegefoods",
        text:
          "Message sent successfully. Vegefoods will contact you as soon as possible",
      });
      transporter.sendMail({
        from: "ldragotechs@gmail.com",
        to: "nageshgogulamuri63@gmail.com",
        subject: "Vegefoods customer details",
        text:
          "Name : " +
          name +
          "\nEmail : " +
          email +
          "\nSubject : " +
          subject +
          "\nMessage :" +
          message,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getabout = async (req, res, next) => {
  const email = req.body.email;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ldragotechs@gmail.com",
      pass: "Ldragotechs@7",
    },
  });
  const subscription = await Subscription.findOne({ email: email });
  if (subscription) {
    const error = new Error("Already,You are subscribed");
    throw error;
  } else {
    const subscription = new Subscription({
      email: email,
    });
    subscription
      .save()
      .then((result) => {
        console.log(result);
        res.redirect("/about");
        transporter.sendMail({
          from: "ldragotechs@gmail.com",
          to: email,
          subject: "Vegefoods",
          text: "You have subscribed succesfully",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
