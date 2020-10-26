const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("../connection/connection");
const app = express();
//const connection = mysql();
app.use(cors());
// this is use to validate user
app.get("/changeEmail", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const { email, oldPassword, NewEmail, role } = req.query;
  console.log("email" + email);
  console.log("old pass working" + oldPassword);
  console.log("role " + role);
//DELETE FROM mid.patient WHERE Cnic = '';
  const verifyDoctor = `SELECT * FROM mid.doctor where email='${email}' and password='${oldPassword}';`;
  const verifypatient = `SELECT * FROM mid.patient where email='${email}' and password='${oldPassword}';`;
  const verifyAdmin = `SELECT * FROM mid.adminp where email='${email}' and password='${oldPassword}';`;
  const changePatientEmail = `update mid.patient set email='${NewEmail}' where email='${email}';`;
  const changeDoctorEmail = `update mid.doctor set password='${NewEmail}' where email='${email}';`;
  const changeAdminEmail = `update mid.adminp set password='${NewEmail}' where email='${email}';`;
  if (role == 1) {
    //for user(patient)
    connection.query(verifyAdmin, (err, results) => {
      console.log("length" + results.length);
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
        connection.query(changeAdminEmail, (err, results) => {
          if (err) {
            //will send error message if any
            res.send(err);
          } else {
            return res.json({
              data: results,
              message: "The user password is changed",
              status: "EmailChange",
            });
          }
        }); //end of second query
      } // end of inner else if
    }); /// end of first query run
  } else if (role == 2) {
    console.log("in doctor portal");
    // for doctor
    connection.query(verifyDoctor, (err, results) => {
      console.log("length" + results.length);
      if (err) {
        //will send error message if any
        console.log("data not working");
        res.send(err);
      } else if (results.length === 0) {
        console.log("user not verified");
        return res.json({
          message: "The user is not verified",
          status: "Fail",
        });
      } else if (results.length > 0) {
        connection.query(changeDoctorEmail, (err, results) => {
          if (err) {
            //will send error message if any
            res.send(err);
          } else {
            console.log("user email chnaged");
            return res.json({
              data: results,
              message: "The user password is changed",
              status: "EmailChange",
            });
          }
        }); //end of second query
      } // end of inner else if
    });
  } //end of else if outer
  else if (role == 3) {
    connection.query(verifypatient, (err, results) => {
      console.log("length" + results.length);
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
        connection.query(changePatientEmail, (err, results) => {
          if (err) {
            //will send error message if any
            res.send(err);
          } else {
            return res.json({
              data: results,
              message: "The user password is changed",
              status: "EmailChange",
            });
          }
        }); //end of second query
      } // end of inner else if
    });
  } //end of all if else
  // }
});

module.exports = app;
