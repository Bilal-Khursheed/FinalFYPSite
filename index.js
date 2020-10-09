const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
//var mysql = require("mysql");
var mysql = require("./backend/connection/connection");

const app = express();
mysql;
app.use(express.json({ extended: false }));
app.use("/user", require("./backend/apis/login")); //use to get login data and will check data from database and will allow the user to login
app.use("/users", require("./backend/apis/signupmail")); // use to store data in database and also mail data to the admin
app.use("/api", require("./backend/apis/contactusMail")); //use to mail the that came from contact us
app.use("/users", require("./backend/apis/signupApprovel")); //admin will approve signup request
app.use('/users',require("./backend/apis/changePass"));

// port for local host
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
