const express = require("express");
const app = express();
const { checkTime } = require("./middleware");

const PORT = 3000;

app.use(express.static(__dirname + "/"));

app.use(checkTime);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/views/services.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.get("/style.css", (req, res) => {
  res.set("Content-Type", "text/css");
  res.sendFile(__dirname + "/views/style.css");
});
