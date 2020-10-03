import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {
      var data = localStorage.getItem("doctor");
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
            PortalName="Doctors Portal"

            showHistory1="true"
            History1="Patient History"
            showHistory2=""
            History2="Patients History"
            
            showRequest1=""
            Request1=""
            showRequest2="true"
            Request2="Patients Request"

            uploadImage="true"

            PersonName={name}
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;