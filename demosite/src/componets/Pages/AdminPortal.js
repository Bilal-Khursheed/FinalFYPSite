import React, { Component } from 'react';
import Portal from '../Common/portal'
import Copyright from "../Common/Copyright";

class AdminPortal extends Component {
    render() {
      var data = localStorage.getItem("admin");
      var data2 = JSON.parse(data);
      var name="";
      //var detials=JSON.parse( data2.data)
      var i = "";
      for (i in data2.data) {
        name=data2.data[i].fname;
        name += " "+data2.data[i].lname;
        console.log(name);
      }
        return (
          <div>
            <Portal 
            PortalName="Admin Portal"
            
            showHistory1="true"
            History1="Doctors History"
            showHistory2="true"
            History2="Patients History"
            
            showRequest1="true"
            Request1="Doctors Request"
            showRequest2="true"
            Request2="Patients Request"

            uploadImage=""

            PersonName={name}
            
            />
        <Copyright />
           
           </div>
        );}
 }
                           
export default AdminPortal;
