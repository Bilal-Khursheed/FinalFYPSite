import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {
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

            PersonName="Dr. Muhammad Umar"
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;