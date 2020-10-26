import React, { Component } from "react";
import Footer from "../../Common/MIDWebsite/Footer";
import Copyright from "../../Common/MIDWebsite/Copyright";
import Contact from "../../Common/MIDWebsite/Contact";

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
