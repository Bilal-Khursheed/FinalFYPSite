import React, { Component } from 'react';
import Header from '../Common/Header';
import About from '../Common/About'
import Footer from "../Common/Footer";
import image from '../assests/img/MI-Teaser.png'
import Copyright from '../Common/Copyright';

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
