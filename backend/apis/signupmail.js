const cors = require("cors");
const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const connection = require("../connection/connection");
const nodemailer = require("nodemailer");
app.use(cors());

//this is use for sending mail for contact us window
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.post("/add", async (req, res) => {
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
      pass: "comsats143", //  password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Node Mailer" <balich616@gmail.com>', // sender address
    to: "umarnazaket97@gmail.com, balich617@gmail.com", // list of receivers
    subject: "Contact Request", // Subject line
    text: "This is for test purpose", // plain text body
    html: htmll, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});

module.exports = app;
