import React, { Component } from "react";
import image from "../../assests/img/Service.png";

// Reusable Coomponents
import Header from "../../Common/MIDWebsite/Header";
import Services from "../../Common/MIDWebsite/Services";
import About from "../../Common/MIDWebsite/About";
import Team from "../../Common/MIDWebsite/Team";
import Contact from "../../Common/MIDWebsite/Contact";
import Footer from "../../Common/MIDWebsite/Footer";
import Copyright from "../../Common/MIDWebsite/Copyright";

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
