const express = require("express");
const bodyParse = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
var mysql = require("mysql");

const app = express();

// connect with the given mysql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mid"
});
//check the connection with database
connection.connect(function(err) {
  if (err) {
    console.log("got an error while connecting with database");
  } else {
    console.log(`Connected!!! with database ${connection.state}`);
  }
});
//database queries
const allQuery = "SELECT * FROM mid.user;";

app.use(cors());
// this is use to validate user
app.get("/user/check", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const { email, pass } = req.query;
  const checkdata = `SELECT * FROM mid.user where email='${email}' and pass='${pass}';`;
  connection.query(checkdata, (err, results) => {
    //this result will match the given id with database id to check result
    const result = results.find(c => c.status === 1 || c.status === true);
    if (err) {
      //will send error message if any
      res.send(err);
    } else if (!result) {
      //will send info if data not found
      return res.json({
        message: "The result user is not allowed to join",
        status: "Fail"
      });
    } else {
      return res.json({
        //will return data in json format if any
        data: results,
        message: "working and user is allowed  ",
        status: "success"
      });
    }
  });
});

app.get("/users/approve/:id", (req, res) => {
  const Id = req.params.id;
  const checkdata = `update mid.user set status=true where email='${Id}';`;
  connection.query(checkdata, (err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.status(200).json({
        message: "User is Approved by you"
      });
    }
  });
});
//will get data of all students from data base of given table
app.get("/users", (req, res) => {
  connection.query(allQuery, (err, results) => {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: results
      });
    }
  });
});

//this is use for sending mail for contact us window
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

//ref : downloaded video fullstake about nodejs express and mysql
// this is use to store given data in restapi link and will save it into database

app.post("/users/add", async (req, res) => {
  const email = req.body.email;
  const fname = req.body.fullName;
  const lname = req.body.Username;
  const password = req.body.password;
  console.log("email :" + email);
  console.log("name :" + fname);
  console.log("name :" + lname);
  console.log("pass :" + password);
  const checkdata = `INSERT INTO mid.user(email, fname, lname, pass,status) VALUES ('${email}', '${fname}', '${lname}','${password}',false);`;
  connection.query(checkdata, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.send("data added");
    }
  });
  const htmll = `<p>You have a New contact request </p>
  <h2>Contact Details</h2>
  <ul>
    <li>Name: ${fname}</li>
    <li>Email: ${email}</li>
    <li>UserName: ${lname}</li>
  </ul>
  <h3>Message</h3>
  <p>Admin kindly Check the detail and Approve OR cancel request</p>
  <button  >Cancel</button>
  <a href='http://localhost:3001/users/approve/${email}'>Approve</a>
    `;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "balich616@gmail.com", //  user
      pass: "comsats1433" //  password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Node Mailer" <balich616@gmail.com>', // sender address
    to: "umarnazaket97@gmail.com, balich617@gmail.com", // list of receivers
    subject: "Contact Request", // Subject line
    text: "This is for test purpose", // plain text body
    html: htmll // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

app.post("/api/form", async (req, res) => {
  const htmll = `<p>You have a New contact request </p>
  <h2>Contact Details</h2>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone No: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
    `;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "balich616@gmail.com", //  user
      pass: "comsats1433" //  password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Node Mailer" <balich616@gmail.com>', // sender address
    to: "umarnazaket97@gmail.com, balich617@gmail.com", // list of receivers
    subject: "Contact Request", // Subject line
    text: "This is for test purpose", // plain text body
    html: htmll // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});
app.get("/", (req, res) => {
  return res.send("hello there jbkasddv");
});
// im not using this function
app.post("/users/check/", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const { email, password } = req.body;
  //const Id = req.params.id;
  const checkdata = `SELECT * FROM mid.user where email=${email} and pass='${password}';`;
  console.log(`checking data email is : ${email} , password : ${password}`);
  connection.query(checkdata, (err, results) => {
    //this result will match the given id with database id to check result
    // const result = results.find(c => c.id === parseInt(email));
    if (err) {
      //will send error message if any
      res.send(err);
    } /* else if (!result) {
      //will send info if data not found
      return console.log("did not find any");
    }*/ else {
      return console.log("found its");
    }
  });
});

// port for local host
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
