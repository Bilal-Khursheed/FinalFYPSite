const { json } = require("body-parser");
const cors = require("cors");
const express = require("express");
const connection = require("../connection/connection");
const app = express();
//const connection = mysql();
app.use(cors());

app.get("/forgetPassword", (req, res) => {
    var cnic=res.query.CNIC;
    const changePatientPass= `update mid.patient set password='${newPassword}' where cnic='${cnic}';`;
    const changeDoctorPass= `update mid.doctor set password='${newPassword}' where email='${cnic}';`;
    const changeAdminPass= `update mid.adminp set password='${newPassword}' where email='${cnic}';`;
})