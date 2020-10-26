import React, { Component } from 'react';
import Header from "../../Common/MIDWebsite/Header";
import image from '../../assests/img/Team.png'
import Team from '../../Common/MIDWebsite/Team';
import Footer from "../../Common/MIDWebsite/Footer";
import Copyright from '../../Common/MIDWebsite/Copyright';

class MainTeam extends Component
{
    render()
    {
        return (
          <div>
            <Header title="Team!" showButton={false} image={image} />
            <Team />
            <Footer />
            <Copyright />
          </div>
        );
    }
}

export default MainTeam;