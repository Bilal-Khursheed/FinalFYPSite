import React,{Component} from 'react';

import SingleService from '../SingleService';

import BTimg from '../../assests/img/brain.png';
import BCimg from "../../assests/img/ribbon.png";
import LCimg from "../../assests/img/lungs.png";


const services = [
  {
    title: "Brain Tumor Detection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    imgSrc: BTimg
  },
  {
    title: "Breast Cancer Detection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
    imgSrc: BCimg
  },
  {
    title: "TuberCulosis Detection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
      imgSrc: LCimg
  }
];

const colore = {
  color: "#fec503"
};

class Services extends Component
{
    render()
    {
        return (
          <div>
           
            {/*  Services */}
            <section className="page-section" id="services">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2 className="pt4-ns section-heading text-uppercase" style={colore}>Services</h2>
                    <h3 className="section-subheading text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                  </div>
                </div>
                <div className="row text-center">
                  {services.map((service, index) => {
                    return <SingleService {...service} key={index} />;
                  })}
                </div>
              </div>
            </section>

            
          </div>
        );
    }
}

export default Services;