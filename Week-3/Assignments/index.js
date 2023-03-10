var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//const cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dataRouter = require("./routes/data");
var myNameRouter = require("./routes/myName");
//var trackNameRouter = require("./routes/trackName");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/data", dataRouter);
app.use("/myName", myNameRouter);
//app.use("/trackName", trackNameRouter);
//solve Cross-Origin Resource Sharing Issue
//app.use(cors());
app.get("/trackName", (req, res) => {
  res.cookie("username", req.query.name);
  const name = req.cookies.username;
  //res.send(`Thank you, your name now store in cookie!`);
  res.redirect("/myName");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!");
});

module.exports = app;
