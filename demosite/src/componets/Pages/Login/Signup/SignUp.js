import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    Email: "",
    CNIC: "",
    F_Name: "",
    L_Name: "",
    Phone_No: "",
    Password: "",
    Hospital: "",
    Address: "",
    City: "",
    State: "",
    Country: "",
    Zip_code: "",
    navigate: false,
    role: 1,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(" login e value", e.target.value);
  };

  handleSubmit = async (e) => {
    console.log("name" + this.state.name);
    console.log("email" + this.state.email);
    e.preventDefault();
    //this will assign these variable values from this.state
    const {
      Email,
      CNIC,
      F_Name,
      L_Name,
      Phone_No,
      Password,
      Hospital,
      Address,
      City,
      State,
      Country,
      Zip_code,
      role,
    } = this.state;
    console.log("name after assigning" + Email);

    //this will send data to rest api then api will send mail with given data to admin
    const form = await axios
      .post("/users/add", {
      Email,
      CNIC,
      F_Name,
      L_Name,
      Phone_No,
      Password,
      Hospital,
      Address,
      City,
      State,
      Country,
      Zip_code,
      role,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("your data in stored in database");
          alert(
            "Thanks for you Registration! your data is transferd to Admin will Aknowledge you by Email."
          );
          setTimeout(() => this.setState({ navigate: true }), 20);
        }
      })
      .catch((err) => {
        console.log(e);
      });
  };

  render() {
    if (this.state.navigate) {
      return <Redirect to="/" />;
    }
    return (
      <div className="main-w3layouts wrapper">
        <h1 className="h1">SignUp </h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form method="POST" onSubmit={this.handleSubmit}>
              <input
                className="text"
                type="text"
                name="F_Name"
                placeholder="First Name"
                onChange={this.handleChange}
                required="required"
              />
              <br />
              <input
                className="text"
                type="text"
                name="L_Name"
                placeholder="Last Name"
                onChange={this.handleChange}
                required="required"
              />

              <input
                className="text email"
                type="email"
                name="Email"
                placeholder="Enter Email"
                onChange={this.handleChange}
                required="required"
              />

              <input
                className="text"
                type="text"
                name="CNIC"
                placeholder="Enter CNIC"
                onChange={this.handleChange}
                required="required"
              />

              <br />
              <input
                className="text"
                type="text"
                name="Phone_No"
                required
                onChange={this.handleChange}
                placeholder="Enter Null If no <Phone Number>"
              />
              <br />
              <input
                className="text"
                type="text"
                name="Hospital"
                placeholder="Enter Null if no <Hospital>"
                onChange={this.handleChange}
                required
              />
              <br />
              <input
                className="text"
                type="text"
                name="Address"
                placeholder="Enter Address"
                onChange={this.handleChange}
                required="required"
              />
              <br />
              <div class="form-row">
                <div class="col-7">
                  <input
                    type="text"
                    name="City"
                    class="form-control"
                    placeholder="City"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    class="form-control"
                    name="State"
                    onChange={this.handleChange}
                    placeholder="Province/State"
                    required
                  />
                </div>
                <br />
                <br />
                <div class="col-7">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Country"
                    name="Country"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div class="col-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Zip Code"
                    onChange={this.handleChange}
                    name="Zip_code"
                    required
                  />
                </div>
              </div>

              <input
                className="text w3lpass"
                type="password"
                name="Password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                required="required"
              />

              <input
                className="text w3lpass"
                type="password"
                name="CPassword"
                placeholder="Confirm Password"
                required="required"
              />
              <div className="wthree-text">
                <label className="anim">
                  <input
                    // style={{ background: "black" }}
                    type="checkbox"
                    // className="checkbox"
                    required="required"
                  />
                  <strong>
                    {" "}
                    <span> I Agree To The Terms & Conditions</span>
                  </strong>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit" value="SIGNUP" />
            </form>
            <p>
              <Link to="/login"> Login Now!</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
