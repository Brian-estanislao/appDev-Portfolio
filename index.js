const express = require("express");
const path = require("path");
const myModule = require("./mymodule");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const siteTitle = "Brian's Portfolio";

app.get("/", (req, res) => {
  const projects = myModule.getProjects();
  res.render("home", { pageTitle: "Home", siteTitle, projects });
});

app.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About Me", siteTitle });
});

app.get("/portfolio", (req, res) => {
  const projects = myModule.getProjects();
  res.render("portfolio", { pageTitle: "Portfolio", siteTitle, projects });
});

app.get("/contact", (req, res) => {
  res.render("contact", { pageTitle: "Contact", siteTitle });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
