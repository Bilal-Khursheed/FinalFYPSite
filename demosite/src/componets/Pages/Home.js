import React, { Component } from "react";
import image from "../assests/img/Service.png";

// Reusable Coomponents
import Header from "../Common/Header";
import Services from "../Common/Services";
import About from "../Common/About";
import Team from "../Common/Team";
import Contact from "../Common/Contact";
import Footer from "../Common/Footer";
import Copyright from "../Common/Copyright";

class Home extends Component {
  render() {
    return (
      <div>
        <Header
          title="Welcome To Our Laboratory!"
          subtitle="Medical Imaging And Diagnoses"
          buttonText="Know More"
          link="/About"
          showButton={true}
          image={image}
          
        />
        <Services />
        <About />
        <Team />
        <Contact />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default Home;
