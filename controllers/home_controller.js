const Post = require("../models/post");
const User = require("../models/user");

module.exports.home = function (req, res) {
  Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    })
    .exec(function (err, posts) {
      if (err) {
        console.log(err);
        return;
      }
      User.find({}, function (err, users) {
        return res.render("home", {
          title: "getSocial | Home",
          posts,
          all_users: users,
        });
      });
    });
};

//module.exports.actionName = function(req, res){}
