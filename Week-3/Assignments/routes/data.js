var express = require("express");
var router = express.Router();

/* GET data listing. */
router.get("/", function (req, res, next) {
  if (!req.query.number) {
    res.status(400).json({ error: "Lack of Parameter" });
  } else {
    const num = Number(req.query.number);
    //String input pass into Number() will get NaN
    if (!num) {
      res.status(200).json({ error: "Wrong Parameter" });
    } else {
      //1+2+...+N=(1+N)*N/2
      const result = ((1 + num) * num) / 2;
      res.status(200).json({ result });
    }
  }
  console.log(res.json);
});

//error handler
router.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = router;
