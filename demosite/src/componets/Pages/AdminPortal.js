import React, { Component } from 'react';
import Portal from '../Common/portal'
import Copyright from "../Common/Copyright";

class AdminPortal extends Component {
    render() {
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

            PersonName="Muhammad Umar"
            
            />
        <Copyright />
           
           </div>
        );}
 }
                           
export default AdminPortal;
