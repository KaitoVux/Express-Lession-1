const express = require('express');

let router = express.Router();
let routes = function () {

    router.route('/')
    .get(async (req, res) => {
      return res.status(200).json({
        data: "default",
        statusCode: 200,
        message: 'Default response'
      });
    });

    router.route('/r1')
    .get(async (req, res) => {
      return res.status(200).json({
        data: "r1",
        statusCode: 200,
        message: 'API R1'
      });
    });

    router.route('/r2')
    .get(async (req, res) => {
      return res.status(200).json({
        data: "r2",
        statusCode: 200,
        message: 'API R2'
      });
    });

    return router
}
module.exports = routes;