import React, { Component } from 'react';
import Header from "../../Common/Header";
import image from '../../assests/img/Team.png'
import Team from '../../Common/Team';
import Footer from "../../Common/Footer";
import Copyright from '../../Common/Copyright';

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