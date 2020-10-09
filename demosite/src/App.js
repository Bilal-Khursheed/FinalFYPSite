import React from "react";
import PageWrapper from "./componets/PageWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//private routes
import {ProtectedRoute} from "./componets/Common/privateRoute/privateRoutes";

// Pages
import Home from "./componets/Pages/mainWebsite/Home";
import AboutUs from "./componets/Pages/mainWebsite/AboutUs";
import MainServices from "./componets/Pages/mainWebsite/MainServices";
import ContactUs from "./componets/Pages/mainWebsite/ContactUs";
import MainTeam from "./componets/Pages/mainWebsite/MainTeam";
import Login from "./componets/Pages/Login/Login";
import SignUp from "./componets/Pages/Login/Signup/SignUp";
import AdminPage from "./componets/Common/AdminPage";
import BreastCancer from "./componets/Common/BreastCancer";
import BrainTumor from "./componets/Common/BrainTumor";
import Tuberculosis from "./componets/Common/Tuberculosis";
import Reportpdf from "./PDFworking/Reportpdf";
import AdminPortal from "./componets/Pages/adminPortal/AdminPortal";
import DoctorsPortal from "./componets/Pages/DoctorPortal/DoctorsPortal";
import PatientPortal from "./componets/Pages/PatientPortal/PatientPortal";
import AddDoc from "./componets/Pages/adminPortal/AddDoc"
import AddPat from "./componets/Pages/adminPortal/AddPat"
import DelDoc from "./componets/Pages/adminPortal/DelDoc"
import DelPat from "./componets/Pages/adminPortal/DelPat"
import DocHistory from "./componets/Pages/adminPortal/DocHistory"
import PatHistory from "./componets/Pages/adminPortal/PatHistory"
import PviewReport from "./componets/Pages/PatientPortal/PviewReport"
import Viewhistory from "./componets/Pages/PatientPortal/ViewHistory"
import DocAddPat from "./componets/Pages/DoctorPortal/DocAddPat"
import DocDelPat from "./componets/Pages/DoctorPortal/DocDelPat"
import docviewpathistory from "./componets/Pages/DoctorPortal/DocViewPatHis"
import adminAccInfo from "./componets/Pages/adminPortal/AdminChangeInfo"
import DoctorAccInfo from "./componets/Pages/DoctorPortal/DocChangeInfo"
import PatientAccInfo from "./componets/Pages/PatientPortal/PatientChangeInfo"

//this is for test purpose
import pdf from "./PDFworking/pdfreport";

function App() {
  return (
    <Router>
      <Switch>
        <PageWrapper>
          <Route exact={true} path="/" component={Home} />

          <Route path="/about" component={AboutUs} />

          <Route path="/services" component={MainServices} />

          <Route path="/contact" component={ContactUs} />

          <Route path="/team" component={MainTeam} />

          <Route path="/login" component={Login} />

          <Route path="/signup" component={SignUp} />

          <ProtectedRoute path="/adminportal" component={AdminPortal} />

          <ProtectedRoute path="/doctorportal" component={DoctorsPortal} />

          <ProtectedRoute path="/patientportal" component={PatientPortal} />

          <ProtectedRoute path="/addpatient" component={AddPat} />

          <ProtectedRoute path="/adddoctor" component={AddDoc} />

          <ProtectedRoute path="/deldoctor" component={DelDoc} />

          <ProtectedRoute path="/delpatient" component={DelPat} />

          <ProtectedRoute path="/dochistory" component={DocHistory} />

          <ProtectedRoute path="/pathistory" component={PatHistory} />

          <ProtectedRoute path="/viewreport" component={PviewReport} />

          <ProtectedRoute path="/viewhistory" component={Viewhistory} />

          <ProtectedRoute path="/docaddpat" component={DocAddPat} />

          <ProtectedRoute path="/docdelpat" component={DocDelPat} />

          <ProtectedRoute path="/docviewpathistory" component={docviewpathistory} />

          <ProtectedRoute path="/adminaccinfo" component={adminAccInfo} />

          <ProtectedRoute path="/doctoraccinfo" component={DoctorAccInfo} />

          <ProtectedRoute path="/patientaccinfo" component={PatientAccInfo} />

         

          <Route
            component={AdminPage}
            // auth={this.state.auth}
            path="/adminn/admin"
          />

          <Route path="/breastcancer" component={BreastCancer} />

          <Route path="/braintumor" component={BrainTumor} />

          <Route path="/tuberculosis" component={Tuberculosis} />

          <Route path="/report2" component={Reportpdf} />
          <Route path="/report" component={pdf} />
          <Route path="*" component={() => "404 PAGE NOT FOUND"} />
        </PageWrapper>
      </Switch>
    </Router>
  );
}

export default App;
