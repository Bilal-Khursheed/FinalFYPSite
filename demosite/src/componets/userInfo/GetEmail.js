import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class GetEmail {
  
   email() {
    var data = localStorage.getItem("admin");
    var email1="bila";
    var role=0;
    if(data){
    var data2 = JSON.parse(data);
    
    //var detials=JSON.parse( data2.data)
    var i = "";
    for (i in data2.data) {
      email1=data2.data[i].email;
     
      console.log(email1);
      role=1;
      return [email1,role];
    }
}//end of if
else{
return email1
}
  }}

export default new GetEmail();
