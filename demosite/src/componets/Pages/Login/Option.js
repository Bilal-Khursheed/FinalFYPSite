import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Options.css";

class Option extends Component {
  render() {
    return (
      <div>
        <div class="main-content">
          <h1 className="text-center mt-5 bt-5"> Welcome TO MID System</h1>
          <h1 className="text-center">You Are </h1>
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <Link to="/adminsignup" className="text-dark">
                <div class="notebook-cover blue">
                  <div class="notebook-skin">Admin</div>
                </div>
                <div class="notebook-page ruled"></div>
              </Link>
            </div>
            <h4>
              <Link to="/adminsignup" className="text-light">
                Admin
              </Link>
            </h4>
          </div>
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <Link to="/signup" className="text-dark">
                <div class="notebook-cover yellow">
                  <div class="notebook-skin">
                    <Link to="/signup" className="text-dark">
                      Doctor
                    </Link>
                  </div>
                </div>
                <div class="notebook-page squared"></div>
              </Link>
            </div>
            <h4>
              <Link to="/signup" className="text-light">
                Doctor
              </Link>
            </h4>
          </div>
          <div class="moleskine-wrapper">
            <div class="moleskine-notebook">
              <Link to="/patsignup" className="text-dark">
                <div class="notebook-cover green">
                  <div class="notebook-skin">Patient</div>
                </div>
                <div class="notebook-page dotted"></div>
              </Link>
            </div>
            <h4>
              <Link to="/patsignup" className="text-light">
                Patient
              </Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default Option;
