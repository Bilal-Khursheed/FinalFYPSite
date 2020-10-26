import React, { Component } from 'react';

import image from "../../assests/img/human.png";

// Pages
import Header from "../../Common/MIDWebsite/Header";
import Services from "../../Common/MIDWebsite/Services";
import ServiceDetails from "../../Common/MIDWebsite/ServiceDetails";
import Contact from "../../Common/MIDWebsite/Contact";
import Footer from "../../Common/MIDWebsite/Footer";
import Copyright from '../../Common/MIDWebsite/Copyright'


class MainServices extends Component 
{
    render()
    {
        return (
          <div>
            <Header
              title="Services!"
              subtitle="Medical Imaging And Diagnoses using Ai techniques"
              showButton={false}
              image={image}
            />
            <Services />
            <ServiceDetails />
            <Contact />
            <Footer />
            <Copyright />
          </div>
        );
    }
}
export default MainServices;