var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  if (!req.cookies.email) {
    res.redirect("/");
  } else {
    res.render("member", { title: "Member Page", email: req.cookies.email });
  }
});

module.exports = router;
