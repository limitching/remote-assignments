var express = require("express");
const cookieParser = require("cookie-parser");
var router = express.Router();

router.use(cookieParser());
/* GET trackName listing. */
router.get("/", function (req, res, next) {
  const name = req.cookies.name;
  if (name) {
    res.redirect("../myName");
  } else {
    console.log(req.query);
    res.cookie("name", name);
    res.send(`
    <form action="/myName">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <button type="submit">Submit</button>
    </form>
    `);
  }
});

router.get("/", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  res.cookie("name", name);
  res.redirect("/");
});

module.exports = router;
