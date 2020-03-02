const express = require("express");
const { User } = require("../models/user");
const connection = require("../Connection/mongo");
const bodyParser = require("body-parser");

let router = express.Router();

let routes = function() {
  router.route("/users").get((req, res) => {
    //   return res.status(200).json({
    //     data: 'asdfdsasf',
    //     statusCode: 200,
    //     message: 'Get Succeed'
    // });

    var users = null;

    // Check search by Email
    if (req.query.email) {
      users = User.find({
        email: req.query.email
      });
    } else {
      users = User.find();
    }

    return res.status(200).json({
      data: users,
      statusCode: 200,
      message: "Get Succeed"
    });
  });

  router.route("/user").post((req, res) => {
    let user = new User({
      email: req.body.email ? req.body.email : "",
      password: req.body.password ? req.body.password : ""
    });

    user.save(err => {
      if (err) {
        return res.status(200).json({
          data: err,
          statusCode: 100,
          message: "Error"
        });
      }

      return res.status(200).json({
        data: user,
        statusCode: 200,
        message: "Succceed"
      });
    });
  });

  return router;
};
module.exports = routes;
