const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("../connection/connection");
const app = express();
//const connection = mysql();
app.use(cors());
// this is use to validate user
app.get("/changepass", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const {email,oldPassword,newPassword,role } = req.query;
  console.log("email" + email);
  console.log("old pass working" + oldPassword);
  console.log("new pass working" + newPassword);
  

  const verifyDoctor = `SELECT * FROM mid.doctor where email='${email}' and pass='${oldPassword}';`;
  const verifypatient = `SELECT * FROM mid.user where email='${email}' and pass='${oldPassword}';`;
  const verifyAdmin = `SELECT * FROM mid.adminp where email='${email}' and pass='${oldPassword}';`;
  const changePatientPass= `update mid.user set pass='${newPassword}' where email='${email}';`;
  const changeDoctorPass= `update mid.doctor set pass='${newPassword}' where email='${email}';`;
  const changeAdminPass= `update mid.adminp set pass='${newPassword}' where email='${email}';`;
  //if(role==1){//for user(patient)
    connection.query(verifyAdmin, (err, results) => {
        console.log("length" + results.length)
      if (err) {
        //will send error message if any
        console.log("data not working")
        res.send(err);
      } else if (results.length===0) {
        return res.json({
          message: "The user is not verified",
          status: "Fail",
        });
      }else if(results.length>0){
        connection.query(changeAdminPass, (err, results) => {
          if (err) {
            //will send error message if any
            res.send(err);
          } else {
            return res.json({
              data: results,
              message: "The user password is changed",
              status: "passChange",
            });
          
      }
    });


  }
});
 // }
})
  
module.exports = app;
