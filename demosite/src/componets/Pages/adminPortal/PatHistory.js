import React, { Component } from 'react';
import Portal from '../../Common/portal'
import Copyright from "../../Common/MIDWebsite/Copyright";
import AdminInfo from "../../userInfo/GetData"

class DocHistory extends Component {
    render() {
       
        return (
            <div>
          <Portal 
           PortalName="Admin Portal"
           SideBarName="PatientHistory"
           PersonName={AdminInfo.adminData().toUpperCase()}
           portallink="/adminportal"
           
           // Heading 01
           mainoption1="Manage Doctor"
           smalloption1="Add Doctor"
           linksmall1="/adddoctor"
 
           showOption2="true"
           smalloption2="Delete Doctor"
           linksmall2="/deldoctor"
 
           showOption3="true"
           smalloption3="Doctor History"
           linksmall3="dochistory"
 
           // Heading 02
           mainoption2="Manage Patients"
 
           showOption4="true"
           smalloption4="Add Patient"
           linksmall4="/addpatient"
 
           showOption5="true"
           smalloption5="Delete Patient"
           linksmall5="/delpatient"
 
           showOption6="true"
           smalloption6="Patient History"
           linksmall6="pathistory"
 
 
           // Heading 03
           mainoption3="Account"
          
           showOption7="true"
           smalloption7="Change Account Info"
           linksmall7="/adminaccinfo"
 
           showOption8=""
           smalloption8=""
           linksmall8="#"
          

        //   Upload Image
          uploadImage=""


        //   Add Doc-Patient
         addpatdoc=""
         addtype="Patient"

        //  Delete Doc-Patient
        delpatdoc=""
        

        // Table No. 1
        history1="true"

         // Get Report
         getReport=""
         // Single patient History
         history2=""

          
          />
      <Copyright />
         
         </div>
        )}}

        export default DocHistory;