import React, { Component } from 'react';
import AboutTop from './AboutTop';
import 'tachyons';

const Page=
{
  background: "#212529",
  color: "white"
}
const SubStyle = {
  color: "#fec503"
};

class About extends Component {
    render() {
        return (
          <div>
            <AboutTop />
            <section className="page-section" id="about" style={Page}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <h2
                      className="f-subheadline lh-title section-heading text-uppercase"
                      style={SubStyle}
                    >
                      About Us
                    </h2>
                    <h3 className="section-subheading text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-image">
                          <img
                            className="rounded-circle img-fluid"
                            src="img/about/1.png"
                            alt=""
                          />
                        </div>

                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4>20016</h4>
                            <h4 className="subheading">
                              Our Humble Beginnings
                            </h4>
                          </div>

                          <div className="timeline-body">
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-inverted">
                        <div className="timeline-image">
                          <img
                            className="rounded-circle img-fluid"
                            src="img/about/2.png"
                            alt=""
                          />
                        </div>

                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4>March 2017</h4>
                            <h4 className="subheading">Laboratory Started</h4>
                          </div>

                          <div className="timeline-body">
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="timeline-image">
                          <img
                            className="rounded-circle img-fluid"
                            src="img/about/3.jpg"
                            alt=""
                          />
                        </div>

                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4>August 2018</h4>
                            <h4 className="subheading">
                              Transition to Full Service
                            </h4>
                          </div>

                          <div className="timeline-body">
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>

                      <li className="timeline-inverted">
                        <div className="timeline-image">
                          <img
                            className="rounded-circle img-fluid"
                            src="img/about/4.png"
                            alt=""
                          />
                        </div>

                        <div className="timeline-panel">
                          <div className="timeline-heading">
                            <h4>July 2019</h4>
                            <h4 className="subheading">Phase Two Expansion</h4>
                          </div>

                          <div className="timeline-body">
                            <p className="text-muted">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Sunt ut voluptatum eius
                              sapiente, totam reiciendis temporibus qui
                              quibusdam, recusandae sit vero unde, sed, incidunt
                              et ea quo dolore laudantium consectetur!
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="timeline-inverted">
                        <div className="timeline-image">
                          <h4>
                            Be Part
                            <br />
                            Of Our
                            <br />
                            Story!
                          </h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );}
 }
                           
export default About;
