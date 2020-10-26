import React, { Component } from "react";
import "./PreReport.css";
import { Link, Redirect } from "react-router-dom";

class PreReport extends Component {
  state = {
    cnic: "",
    navigate: false,
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(" login e value", e.target.value);
  };

  handleSubmit = async (e) => {
    console.log("cnic" + this.state.CNIC);

    e.preventDefault();
    //this will assign these variable values from this.state

    const cnic = this.state.CNIC;
    //this will send data to rest api then api will send mail with given data to admin
    await fetch(`/users/checkcnic?CNIC=${cnic}`)
      //fetch(`/user/check/?email="Bilal.khursheed617@gmail.com" && pass="12345"`)
      .then((respone) => respone.json())
      // .then(() => setTimeout(() => this.setState({ navigate: true }), 2000))
      .then((Result) => {
        if (Result.message === "fundCNIC") {
          localStorage.setItem("report", JSON.stringify(Result));
          setTimeout(() => this.setState({ navigate: true }), 20);
        } else {
          alert("could not found any id");
        }
      })
      .catch((err) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.navigate) {
      return <Redirect to="/getreport" />;
    }
    return (
      <div class="login-box bt-5 bg-transparent">
        <h2 className="bt-5">Enter Patient Data</h2>
        <form onSubmit={this.handleSubmit}>
          {/* <div class="user-box">
              <input type="text" name="" required="" />
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required="" />
              <label>Password</label>
            </div> */}
          <div class="bt-5 col-lg-12 col-12">
            <label for="ID"> ID Card Number:</label>
            <input
              type="Number"
              class="form-control"
              id="ID"
              placeholder="Enter Id Card Number"
              name="CNIC"
              required
              onChange={this.handleChange}
            />
          </div>

          <button
            className="bg-transparent border border-dark"
            onClick={this.handleSubmit}
          >
            <Link>
              <span className="bg-transparent border border-dark"></span>
              <span className="bg-transparent border border-dark"></span>
              <span className="bg-transparent border border-dark"></span>
              <span className="bg-transparent border border-dark"></span>
              Enter Image
            </Link>
          </button>
        </form>
      </div>
    );
  }
}
export default PreReport;
