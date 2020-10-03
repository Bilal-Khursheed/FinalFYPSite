const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("../connection/connection");
const app = express();
//const connection = mysql();
app.use(cors());
// this is use to validate user
app.get("/check", (req, res) => {
  //get this concept from mosh on youtube (restapi)
  const { email, pass } = req.query;
  const checkdata = `SELECT * FROM mid.doctor where email='${email}' and pass='${pass}';`;
  connection.query(checkdata, (err, results) => {
    //this result will match the given id with database id to check result
    const result = results.find((c) => c.status === 1 || c.status === true);
    if (err) {
      //will send error message if any
      res.send(err);
    } else if (!result) {
      const checkdata = `SELECT * FROM mid.adminp where email='${email}' and pass='${pass}';`;
      connection.query(checkdata, (err, results) => {
        //this result will match the given id with database id to check result
        const result = results.find((c) => c.status === 1 || c.status === true);
        if (err) {
          //will send error message if any
          res.send(err);
        } else if (!result) {
          const checkdata = `SELECT * FROM mid.user where email='${email}' and pass='${pass}';`;
          connection.query(checkdata, (err, results) => {
            const result = results.find(
              (c) => c.status === 1 || c.status === true
            );
            if (err) {
              //will send error message if any
              res.send(err);
            } else if (!result) {
              return res.json({
                message: "The result user is not allowed to join",
                status: "Fail",
              });
            } else {
              return res.json({
                //will return data in json format if any
                data: (results),
                message: "working and user is allowed  ",
                status: "success",
                role: "patient",
              });
            }
          });
        } else {
          return res.json({
            //will return data in json format if any
            data: results,
            message: "working and user is allowed  ",
            status: "success",
            role: "Admin",
          });
        }
      });
      //will send info if data not found
      // return res.json({
      //  message: "The result user is not allowed to join",
      //  status: "Fail",
      // });
    } else {
      return res.json({
        //will return data in json format if any
        data: results,
        message: "working and user is allowed  ",
        status: "success",
        role: "doctor",
      });
    }
  });
});

module.exports = app;
