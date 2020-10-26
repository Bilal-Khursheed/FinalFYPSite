import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'tachyons'

import Footer from "./MIDWebsite/Footer";
import Copyright from "./MIDWebsite/Copyright";

const Admin = {
    color : "Black"
}



class AdminPage extends Component 
{
    render()
    {
        return (
          <div className="tc">
            <div className="dib pt4 pt6-ns col-xl-3 col-sm-6 mb-5 grow">
              <Link to="/braintumor">
                <div className="bg-white rounded shadow-sm py-5 px-4 tc">
                  <h1 className="mb-0" style={Admin}>
                    Brain Tumor
                  </h1>
                </div>
              </Link>
            </div>
            <div className="dib col-xl-3 col-sm-6 mb-5 grow">
              <Link to="/breastcancer">
                <div className="bg-white rounded shadow-sm py-5 px-4 tc">
                  <h1 className="mb-0" style={Admin}>
                    Breast Cancer
                  </h1>
                </div>
              </Link>
            </div>
            <div className="dib col-xl-3 col-sm-6 mb-5 grow">
              <Link to="/tuberculosis">
                <div className="bg-white rounded shadow-sm py-5 px-4 tc">
                  <h1 className="mb-0  mb6-ns bb6-ns" style={Admin}>
                    Tuberculosis
                  </h1>
                </div>
              </Link>
            </div>
            <Footer />
            <Copyright />
          </div>
        );
    }
}

export default AdminPage;