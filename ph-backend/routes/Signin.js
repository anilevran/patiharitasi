const express = require("express");
const router = express.Router();
const User = require("../models/user");

function Signin(req, res) {
  search_params = { email: req.body.email, password: req.body.password };
  User.find(search_params).then((result) => {
    console.log(`${result[0].username} bulundu`);
    res.send(result);
  });
}
router.post("/", Signin);
module.exports = router;
