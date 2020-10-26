const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("../../connection/connection");
const app = express();
//const connection = mysql();
app.use(cors());
// this is use to validate user
app.get("/deletePD", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const CNIC = req.query.CNIC;
  console.log(CNIC);

  //DELETE FROM mid.patient WHERE Cnic = '';
  const deletePatient = `DELETE FROM mid.patient WHERE Cnic = '${CNIC}';`;
  const deleteDoctor = `DELETE FROM mid.doctor WHERE Cnic = '${CNIC}';`;
  //   const verifypatient = `SELECT * FROM mid.patient where email='${email}' and password='${oldPassword}';`;
  //   const verifyAdmin = `SELECT * FROM mid.adminp where email='${email}' and password='${oldPassword}';`;
  //   const changePatientEmail = `update mid.patient set email='${NewEmail}' where email='${email}';`;
  //   const changeDoctorEmail = `update mid.doctor set password='${NewEmail}' where email='${email}';`;
  //   const changeAdminEmail = `update mid.adminp set password='${NewEmail}' where email='${email}';`;

  //for user(patient)
  connection.query(deletePatient, (err, results) => {
    //console.log("length" + results.length);
    if (err) {
      //will send error message if any
      console.log("data not working");
      res.send(err);
    } else {
      return res.json({
        data: results,
        message: "The user password is changed",
        status: "PatientDeleted",
      });
      //end of second query
    } // end of inner else if
  }); /// end of first query run
  connection.query(deleteDoctor, (err, results) => {
    // console.log("length" + results.length);
    if (err) {
      //will send error message if any
      console.log("data not working");
      res.send(err);
    } else if (results.length === 0) {
      return res.json({
        message: "The user is not verified",
        status: "Fail",
      });
    } else if (results.length > 0) {
      return res.json({
        data: results,
        message: "The user password is changed",
        status: "DotorDeleted",
      });
      //end of second query
    } // end of inner else if
  }); /// end of first query run
});
module.exports = app;
