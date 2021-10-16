"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors");
const { NotFoundError } = require("./helpers/expressError");
const nunjucks = require("nunjucks");
const pages = require("./routes/pages");

const app = express();

app.set("view engine", "html");
app.use("/public", express.static(path.join(__dirname, 'public')));

nunjucks.configure(['templates/'], {
	autoescape: false,
	express: app
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", pages);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return res.render("404.html");
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.render("500.html", {message, status});
});

module.exports = app;
