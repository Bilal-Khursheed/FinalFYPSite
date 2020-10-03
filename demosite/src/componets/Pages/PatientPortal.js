import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {
      var data = localStorage.getItem("patient");
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
            PortalName="Patient Portal"
            
            showHistory1="true"
            History1="Show History"
            showHistory2=""
            History2="History"
            
            showRequest1=""
            Request1=""
            showRequest2="true"
            Request2="Request List"

            PersonName={name}
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;