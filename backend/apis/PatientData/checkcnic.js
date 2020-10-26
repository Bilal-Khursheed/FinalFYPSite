const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("../../connection/connection");
const app = express();
//const connection = mysql();
app.use(cors());
// this is use to validate user
app.get("/checkcnic", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const CNIC = req.query.CNIC;
  console.log("email" + CNIC);

  //   const verifyDoctor = `SELECT * FROM mid.doctor where email='${email}' and password='${oldPassword}';`;
  const verifypatient = `SELECT * FROM mid.patient where cnic='${CNIC}';`;
  //   const verifyAdmin = `SELECT * FROM mid.adminp where email='${email}' and password='${oldPassword}';`;
  //   const PatientCnic= `update mid.patient set email='${NewEmail}' where email='${oldEmail}';`;
  //   const changeDoctorEmail= `update mid.doctor set password='${NewEmail}' where email='${oldEmail}';`;
  //   const changeAdminEmail= `update mid.adminp set password='${NewEmail}' where email='${oldEmail}';`;

  connection.query(verifypatient, (err, results) => {
    console.log("length" + results.length);
    if (err) {
      //will send error message if any
      console.log("data not working");
      res.send(err);
    } else if (results.length === 0) {
      return res.json({
        message: "NotfundCNIC",
        status: "Fail",
      });
    } else if (results.length > 0) {
      return res.json({
        message: "fundCNIC",
        status: "success",
        data: results,
      });
    } // end of inner else if
  }); /// end of first query run

  // }
});

module.exports = app;
