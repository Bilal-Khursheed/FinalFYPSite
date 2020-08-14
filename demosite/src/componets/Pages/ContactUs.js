import React, { Component } from "react";
import Footer from "../Common/Footer";
import Copyright from "../Common/Copyright";
import Contact from "../Common/Contact";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Contact />
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default ContactUs;
