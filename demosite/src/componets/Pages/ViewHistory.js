import React, { Component } from "react";
import Portal from "../Common/portal";
import Copyright from "../Common/Copyright";

class ViewHistory extends Component {
  render() {
    var data = localStorage.getItem("patient");
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
          PortalName="Patient Portal"
          SideBarName="View History"
          PersonName={name}
          portallink="/patientportal"
          // Heading 01
          mainoption1="Report"
          smalloption1="View Report"
          linksmall1="/viewreport"
          showOption2="true"
          smalloption2="View History"
          linksmall2="/viewhistory"
          showOption3=""
          smalloption3=""
          linksmall3="#"
          // Heading 02
          mainoption2="Manage Account"
          showOption4="true"
          smalloption4="Change Account Info"
          linksmall4="/patientaccinfo"
          showOption5=""
          smalloption5=""
          linksmall5="#"
          showOption6=""
          smalloption6=""
          linksmall6="#"
          // Heading 03
          mainoption3=""
          showOption7=""
          smalloption7=""
          linksmall7="#"
          showOption8=""
          smalloption8=""
          linksmall8="#"

          //   Add Doc-Patient
          addpatdoc=""
          addtype="Patient"
          //  Delete Doc-Patient
          delpatdoc=""
          // History Doc-Patient
          history1=""
          // Get Report
          getReport=""
          // Single patient History
          history2="true"
          // Change Account Info
          changeAccInfo=""

        />
        <Copyright/>
      </div>
    );
  }
}

export default ViewHistory;
