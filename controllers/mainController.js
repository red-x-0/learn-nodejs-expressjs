const User = require("../models/userSchema");

const main_index_get = (req, res) => {
  User.find()
    .then((result) => {
      const users = result;
      res.render("index", { title: "Home", users: users });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_index_post = (req, res) => {
  console.log(req.body.uname);
  User.create(req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  main_index_get,
  user_index_post,
};
