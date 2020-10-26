import React, { Component } from 'react';
import 'tachyons';




const SubStyle = {
  color: "#fec503"
};

const SubStyle1 = {
  color: "#fec503",
};



class AboutTop extends Component
{
    render()
    {
        return (
          <div>
            <h1 className="tc pa4-ns f-subheadline lh-title" style={SubStyle1}>
              Our Vision
            </h1>
            <h4 className="tc  i .w-50-m ">
              "PROVIDE HUMANITY WITH AUTOMATED, ACCURATE & TIMELY MEDICAL IMAGE
              DIAGNOSIS"
            </h4>
            <br /> <br />
            <p className="tc pa4-ns f4 lh-copy bb b--yellow" >
              We innovate to serve real physician needs and to create a measured
              impact on the imaging workflow. <br />
              We think that technology should serve medicine, empowering
              physicians and helping them to be more effective and efficient.
            </p>
            <h1 className="tc pa4-ns f-subheadline lh-title" style={SubStyle}>
              Our Mission
            </h1>
            <h3 className="tc i ">
              "Use of AI based techniques and approaches on different image
              modalities, such as MRI, CT-Scan, X-ray, and Ultrasound to
              identify different diseases such as cancer and tuberculosis."
            </h3>
            <p className="tc pa4-ns f4 lh-copy bb b--yellow" >
              Our mission is to provide radiologists the tools they need to make
              the next leap in patient care.
              <br /> The demand for medical imaging services is continuously
              increasing, outpacing the supply of qualified radiologists and
              stretching them to produce more output, without compromising
              patient care.
              <br /> Only by adopting new technology that significantly enhances
              the capabilities of radiologists, can this crisis be mitigated.
              <br /> MID is empowering radiologists with its revolutionary AI1
              offering which helps health providers manage the ever increasing
              workload without compromising quality.
            </p>
          </div>
        );
    }
}

export default AboutTop;