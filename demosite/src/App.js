import React from "react";
import PageWrapper from "./componets/PageWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//private routes
import PrivateRoute from "./componets/Common/privateRoute/privateRoutes";

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

          <Route path="/adminportal" component={AdminPortal} />

          <Route path="/doctorportal" component={DoctorsPortal} />

          <Route path="/patientportal" component={PatientPortal} />

          <Route
            component={AdminPage}
            // auth={this.state.auth}
            path="/admin"
          />

          <Route path="/breastcancer" component={BreastCancer} />

          <Route path="/braintumor" component={BrainTumor} />

          <Route path="/tuberculosis" component={Tuberculosis} />

          <Route path="/report2" component={Reportpdf} />
          <Route path="/report" component={pdf} />
        </PageWrapper>
      </Switch>
    </Router>
  );
}

export default App;
