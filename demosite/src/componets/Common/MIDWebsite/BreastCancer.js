import React, { Component } from "react";
import { Link } from "react-router-dom";
import "tachyons";
import Reportpdf from "../../../PDFworking/Reportpdf";

import Footer from "./Footer";
import Copyright from "./Copyright";

const SubStyle = {
  color: "#fec503"
};

class BreastCancer extends Component {
  render() {
    return (
      <div className="tc">
        <h1 className="tc mt6-ns f1 lh-title" style={SubStyle}>
          BREAST CANCER
        </h1>
        <div className="dib col-xl-8 col-sm-10 mb-10">
          <div className="bg-white rounded shadow-sm py-5 px-4 tc ma4-ns">
            <h1 className="mb-0">
              <input type="file" />
            </h1>
          </div>

          <h3 className="mb-0">
            <Link to="/report">
              <button
                type="button"
                className="ma4 pa3-ns btn btn-outline-warning"
              >
                Generate Report
              </button>
            </Link>
          </h3>
        </div>
        <Footer />
        <Copyright />
      </div>
    );
  }
}

export default BreastCancer;
