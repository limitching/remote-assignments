var express = require("express");
const cookieParser = require("cookie-parser");
var router = express.Router();

router.use(cookieParser());
/* GET myName listing. */
router.get("/", function (req, res, next) {
  const name = req.cookies.name;
  res.cookie("name", name);
  if (name) {
    res.send(`Hello, ${name}`);
  } else {
    res.send(`
    <form action="../trackName">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <button type="submit">Submit</button>
    </form>
    `);
  }
});

router.get("/trackName", (req, res) => {
  console.log(req.query);
  const name = req.query.name;
  res.cookie("name", name);
  res.redirect("/");
});

module.exports = router;
