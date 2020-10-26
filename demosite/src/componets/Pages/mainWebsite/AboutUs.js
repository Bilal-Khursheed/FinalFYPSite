import React, { Component } from 'react';
import Header from '../../Common/MIDWebsite/Header';
import About from '../../Common/MIDWebsite/About'
import Footer from "../../Common/MIDWebsite/Footer";
import image from '../../assests/img/MI-Teaser.png'
import Copyright from '../../Common/MIDWebsite/Copyright';

class AboutUs extends Component {
    render() {
        return (
          <div>
            
            
            <Header
              title="About Us!"
              subtitle="It's really a great story"
              showButton={false}
              image={image}
            />
            <About/>
            <Footer/>
            <Copyright/>
           
           </div>
        );}
 }
                           
export default AboutUs;
