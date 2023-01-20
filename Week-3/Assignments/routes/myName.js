var express = require("express");
const cookieParser = require("cookie-parser");
var router = express.Router();

router.use(cookieParser());
/* GET myName listing. */
router.get("/", function (req, res, next) {
  if (req.cookies.username) {
    const name = req.cookies.username;
    res.send(`<h1>Hello, ${name}</h1>`);
  } else {
    res.send(`
    <form action="/trackName">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name"/>
        <button>Submit</button>
    </form>
    `);
  }
});

module.exports = router;
