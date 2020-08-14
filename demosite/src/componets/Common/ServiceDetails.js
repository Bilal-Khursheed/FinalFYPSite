import React, { Component } from "react";
import image from "../assests/img/All 3 Processes.png";
import "tachyons";

const SubStyle = {
  color: "#fec503",
};

class ServiceDetails extends Component {
  render() {
    return (
      <div>
        <h1 className="tc pt6-ns pl6-ns pr6-ns  f1 lh-title" style={SubStyle}>
          Details Of Our Services
        </h1>
        <p className="tc pb6-ns f4 lh-copy col-sm-12 Scren bb b--yellow">
          With the advent of medical imaging technology, digital graphical
          representation of different parts of the body are readily available in
          different modalities, such as MRI, CT-Scan, and X-ray. That, along
          with the development in computer hardware technology, has made it
          possible for computer scientists to apply machine learning / pattern
          recognition techniques to classify images as either indicating a
          disease or not. That can be specifically useful for the detection of
          deadly diseases such as cancer and tuberculosis. Machines have an
          advantage over human expertise when it comes to identifying small
          changes in pixel values that are visually rather impossible to see,
          that may indicate the presence or absence of the disease. This project
          is an exercise in this direction to automate the disease detection
          process with achievement of high accuracy to be completed in a
          reasonably short amount of time, making it virtually online.
        </p>
        <h1 className="tc pb1 lh-title" style={SubStyle}>
          Why Brain Tumor
        </h1>
        <p className="tc pb6-ns f4 lh-copy col-sm-12 Scren bb b--yellow">
          Brain and other nervous system cancer is the 10th leading cause of
          death for men and women.
          <br /> It is estimated that 17,760 adults
          <b> 9,910 men and 7,850 women</b> will die from primary cancerous
          brain and CNS tumors this year.
          <br />
          The 5-year survival rate tells you what percent of people live at
          least 5 years after the tumor is found. The 5-year
          <b> survival rate </b>
          for people with a cancerous brain or CNS tumor is approximately
          <b> 34% for men and 36% for women</b>. However, survival rates vary
          widely and depend on several factors, including the type of brain or
          spinal cord tumor. Talk with your doctor about what to expect with
          your diagnosis.
        </p>
        <h1 className="tc pl6-ns pr6-ns pb1 f1 lh-title" style={SubStyle}>
          Why Breast Cancer
        </h1>
        <p className="tc pb6-ns f4 lh-copy col-sm-12 bb b--yellow">
          Breast cancer is one of the leading causes of death among women after
          lung cancer. Every year around
          <b> 40,000 women in Pakistan</b> die due to it. Early detection may
          help in saving lives and enhancing the quality of life for the
          patients. Local hospitals have solutions that take in MRI images and
          help the oncologists in manually identifying the disease. However,
          they lack in disease diagnosis. Such a solution, if built with desired
          accuracy, can find a ready local market.
        </p>

        <h1 className="tc pl6-ns pr6-ns f1 lh-title" style={SubStyle}>
          Why Tuberculosis
        </h1>

        <p className="tc pb6-ns f4 lh-copy bb b--yellow">
          A total of 1.5 million people died from TB in 2018. <br /> Worldwide,
          TB is one of the top 10 causes of death and the leading cause from a
          single infectious agent (above HIV/AIDS). <br />
          In 2018, an estimated 10 million people fell ill with tuberculosis(TB)
          worldwide.
          <b>5.7 million men, 3.2 million women and 1.1 million children</b>
          . There were cases in all countries and age groups. But TB is curable
          and preventable.
          <br /> In 2018, 1.1 million children fell ill with TB globally, and
          there were 205 000 child deaths due to TB (including among children
          with HIV).
          <br /> Child and adolescent TB is often overlooked by health providers
          and can be difficult to diagnose and treat.
        </p>
        <img src={image} alt=""></img>
        <h3 className="tc pb6-ns pr6-ns pl6-ns">
          Image Showing that MID System detects all three diseases and their
          position
        </h3>
      </div>
    );
  }
}

export default ServiceDetails;
