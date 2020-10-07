import React from "react";
import PageWrapper from "./componets/PageWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//private routes
import {ProtectedRoute} from "./componets/Common/privateRoute/privateRoutes";

// Pages
import Home from "./componets/Pages/Home";
import AboutUs from "./componets/Pages/AboutUs";
import MainServices from "./componets/Pages/MainServices";
import ContactUs from "./componets/Pages/ContactUs";
import MainTeam from "./componets/Pages/MainTeam";
import Login from "./componets/Pages/Login";
import SignUp from "./componets/Pages/SignUp";
import AdminPage from "./componets/Common/AdminPage";
import BreastCancer from "./componets/Common/BreastCancer";
import BrainTumor from "./componets/Common/BrainTumor";
import Tuberculosis from "./componets/Common/Tuberculosis";
import Reportpdf from "./PDFworking/Reportpdf";
import AdminPortal from "./componets/Pages/AdminPortal";
import DoctorsPortal from "./componets/Pages/DoctorsPortal";
import PatientPortal from "./componets/Pages/PatientPortal";
import AddDoc from "./componets/Pages/AddDoc"
import AddPat from "./componets/Pages/AddPat"
import DelDoc from "./componets/Pages/DelDoc"
import DelPat from "./componets/Pages/DelPat"
import DocHistory from "./componets/Pages/DocHistory"
import PatHistory from "./componets/Pages/PatHistory"
import PviewReport from "./componets/Pages/PviewReport"
import Viewhistory from "./componets/Pages/ViewHistory"
import DocAddPat from "./componets/Pages/DocAddPat"
import DocDelPat from "./componets/Pages/DocDelPat"
import docviewpathistory from "./componets/Pages/DocViewPatHis"
import adminAccInfo from "./componets/Pages/AdminChangeInfo"
import DoctorAccInfo from "./componets/Pages/DocChangeInfo"
import PatientAccInfo from "./componets/Pages/PatientChangeInfo"

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
