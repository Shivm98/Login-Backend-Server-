const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

const userData = {
  email: "user@mail.com",
  password: "12345",
};

// Route to Homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

// Route to Login Page
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/static/login.html");
});

app.post("/login", (req, res) => {
  let status;
  let username = req.body.username;
  let password = req.body.password;

  if (userData.email === username) {
    if (userData.password === password) {
      status = "success";
    } else {
      status = "password is invalid";
    }
  } else {
    status = "email is invalid";
  }

  res.send(`${status}`);
});

const port = 3000; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
