import React from "react";
import PageWrapper from "./componets/PageWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

          <Route path="/admin" component={AdminPage} />

          <Route path="/breastcancer" component={BreastCancer} />

          <Route path="/braintumor" component={BrainTumor} />

          <Route path="/tuberculosis" component={Tuberculosis} />

          <Route path="/report" component={Reportpdf} />
        </PageWrapper>
      </Switch>
    </Router>
  );
}

export default App;
