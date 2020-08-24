import React, { Component } from 'react';
import Portal from '../Common/portal'

class DoctorsPortal extends Component {
    render() {
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

            PersonName="Muhammad Umar"
            />
           
           </div>
        );}
 }
                           
export default DoctorsPortal;