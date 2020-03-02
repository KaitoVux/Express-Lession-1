const express = require("express");
const { User } = require("../models/user");
const connection = require("../Connection/mongo");
const bodyParser = require("body-parser");

let router = express.Router();

let routes = function() {
  router.route("/users").get(async (req, res) => {
    //   return res.status(200).json({
    //     data: 'asdfdsasf',
    //     statusCode: 200,
    //     message: 'Get Succeed'
    // });

    var users = null;

    // Check search by Email
    try {
      if (req.query.email) {
        users = await User.find({
          email: req.query.email
        });
      } else {
        users = await User.find();
      }
    } catch (error) {
      console.log(error)
    }
    

    return res.status(200).json({
      data: users,
      statusCode: 200,
      message: "Get Succeed"
    });
  });

  router.route('/user')
    .post(async (req, res) => {
        let user = new User({
            email : req.body.email ? req.body.email : '',
            password: req.body.password ? req.body.password : ''
        });

        user.save((err) => {
            if (err) {
                return res.status(200).json({
                    data: err,
                    statusCode: 100,
                    message: 'Error'
                });
            }

            return res.status(200).json({
                data: user,
                statusCode: 200,
                message: 'Succceed'
            });
        });
    });

  router.route("/users/create").post(async (req, res) => {
    let user = new User({
      email: req.body.email ? req.body.email : "",
      name: req.body.name ? req.body.name : ""
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
