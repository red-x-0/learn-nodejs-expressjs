const User = require("../models/userSchema");

const user_view_get = (req, res) => {
  console.log(req.body.uname);
  User.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("user/view", { title: "View", user: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_add_get = (req, res) => {
  res.render("user/add", { title: "Add User" });
};

const user_add_post = (req, res) => {
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

const user_edit_get = (req, res) => {
  console.log(req.body.uname);
  User.findById(req.params.id)
   .then((result) => {
      console.log(result);
      res.render("user/edit", { title: "Edit", user: result });
    })
   .catch((err) => {
      console.log(err);
    });
};

const user_edit_post = (req, res) => {
  console.log(req.body.uname);
  User.findByIdAndUpdate(req.params.id, req.body)
   .then((result) => {
      console.log(result);
      res.redirect("/");
    })
   .catch((err) => {
      console.log(err);
    });
};

const user_delete = (req, res) => {
  console.log(req.body.uname);
  User.findByIdAndDelete(req.params.id)
   .then((result) => {
      console.log(result);
      res.redirect("/");
    })
   .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  user_view_get,
  user_add_post,
  user_add_get,
  user_edit_get,
  user_edit_post,
  user_delete,
};
