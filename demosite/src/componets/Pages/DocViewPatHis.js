import React, { Component } from "react";
import Portal from "../Common/portal";
import Copyright from "../Common/Copyright";

class DocViewPatHistory extends Component {
  render() {
    var data = localStorage.getItem("doctor");
    var data2 = JSON.parse(data);
    var name = "";
    //var detials=JSON.parse( data2.data)
    var i = "";
    for (i in data2.data) {
      name = data2.data[i].fname;
      name += " " + data2.data[i].lname;
      console.log(name);
    }
    return (
      <div>
        <Portal
          PortalName="Doctor Portal"
          SideBarName="Patient History"
          PersonName={name}
          portallink="/doctorportal"
          // Heading 01
          mainoption1="Dashboard"
          smalloption1="Get Report"
          linksmall1="/doctorportal"
          showOption2=""
          smalloption2=""
          linksmall2="#"
          showOption3=""
          smalloption3=""
          linksmall3="#"
          // Heading 02
          mainoption2="Manage Patients"
          showOption4="true"
          smalloption4="Add Patient"
          linksmall4="/docaddpat"
          showOption5="true"
          smalloption5="Delete Patient"
          linksmall5="/docdelpat"
          showOption6="true"
          smalloption6="Patient History"
          linksmall6="/docviewpathistory"
          // Heading 03
          mainoption3="Account"
          showOption7="true"
          smalloption7="Change Account Info"
          linksmall7="/doctoraccinfo"
          showOption8=""
          smalloption8=""
          linksmall8="#"

          // Upload MRI Image 
          uploadImage=""
          //   Add Doc-Patient
          addpatdoc=""
          addtype="Patient"
          //  Delete Doc-Patient
          delpatdoc=""
          // History Doc-Patient
          history1="true"
           // Get Report
           getReport=""
           // Single patient History
           history2=""
        />
        <Copyright/>
      </div>
    );
  }
}

export default DocViewPatHistory;