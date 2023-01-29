var express = require("express");
var router = express.Router();
var database = require("../database");
const cookirParser = require("cookie-parser");
router.use(cookirParser());

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home page", error: "" });
});

//Sign-up
router.post("/signup", async (req, res, next) => {
  const { email, password } = req.body;
  const allUser = await database.getUsers();

  //Check if password is null
  if (req.body.password == "") {
    // return res.status(200).json({
    //   error: `Password cannot be null!`,
    // });
    return res.render("index", {
      title: "Home page",
      error: `Password cannot be null!`,
    });
  }

  //Check if email exist in database
  for (const user of allUser) {
    if (user.email == email) {
      //if email already exist, break the loop, return error
      // return res.status(200).json({
      //   error: `Email ${email} is already exist in our database. Please use Sign-in form!`,
      // });
      return res.render("index", {
        title: "Home page",
        error: `Email ${email} is already exist in our database. Please use Sign-in form!`,
      });
      break;
    }
  }
  const user = await database.createUser(email, password);
  await res.cookie("email", email);
  res.render("signup", {
    title: "Sign-up Successfully",
    email: req.cookies.email,
  });
  //debug
  //res.status(200).json(user);
});

//Sign-in
router.post("/signin", async (req, res, next) => {
  const { email, password } = req.body;
  const allUser = await database.getUsers();

  //Check if password is null
  if (req.body.password == "") {
    // return res.status(200).json({
    //   error: `Password cannot be null!`,
    // });
    return res.render("index", {
      title: "Home page",
      error: `Password cannot be null!`,
    });
  }

  //Check if email exist in database
  let userId = -1;
  for (const user of allUser) {
    if (user.email == req.body.email) {
      userId = user.id;
      break;
    }
  }
  //if no match email in database, return error
  if (userId == -1) {
    // return res.status(200).json({
    //   error: `This email, This email has not been registered, please use the Sign-up form`,
    // });
    return res.render("index", {
      title: "Home page",
      error: `This email, This email has not been registered, please use the Sign-up form`,
    });
  }
  userInDatabase = await database.getUser(userId);
  //if email already exist, then check if password exist
  //if not equal to password in database, return error
  if (userInDatabase[0].password !== req.body.password) {
    // return res.status(200).json({
    //   error: `Invalid password, please check again!`,
    // });
    return res.render("index", {
      title: "Home page",
      error: `Invalid password, please check again!`,
    });
  } else {
    res.cookie("email", email);
    return res.redirect("/member");
  }
});

//Clear cookie via logout
router.post("/logout", async (req, res) => {
  await res.clearCookie("email");
  return res.redirect("/");
});

module.exports = router;
