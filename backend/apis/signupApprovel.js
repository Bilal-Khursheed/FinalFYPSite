const cors = require("cors");
const express = require("express");
const bodyParse = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const connection = require("../connection/connection");

app.use(cors());

//this is use for sending mail for contact us window

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));
//this is use for sending mail for contact us window

//app.use(bodyParse.json());
//app.use(bodyParse.urlencoded({ extended: false }));

app.get("/approve/:id", async (req, res) => {
  const Id = req.params.id;
  const checkdata = `update mid.user set status=true where email='${Id}';`;
  connection.query(checkdata, async (err, results) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.status(200).json({
        message: "User is Approved by you",
      });
      const htmll = `<p>Your signup request is Approved </p>
    <h2>Wellcome</h2>
    <br/>
    <h4>kindly Click on the login button to login to the site</h4>
    <ul>
      
      <li>Email: ${Id}</li>
      <li><button><a href='http://localhost:3000/login'>Login</a></button></li>
      
    </ul>
   
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
        to: Id, // list of receivers
        subject: " Request Approvel", // Subject line
        text: "This is for test purpose", // plain text body
        html: htmll, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  });
});

module.exports = app;
