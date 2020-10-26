import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class AddPat extends Component {
  state = {
    Email: "",
    CNIC: "",
    F_Name: "",
    L_Name: "",
    Phone_No: "",
    Password: "",
    DOB: "",
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
    console.log("name" + this.state.F_Name);
    console.log("email" + this.state.Email);
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
      DOB,
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
        DOB,
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
          alert("Thanks for you Registration!");
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
      <div id="signupbg">
        <div class="container pb-5 pt-5">
          <h1 className="bt-5 pt-5 text-center ">ADD PATIENT</h1>
          <h5 class="text-center">Add Details</h5>
          <form class="form-row" onSubmit={this.handleSubmit}>
            <div class="form-group col-lg-6 col-12">
              <label for="Fname"> First Name:</label>
              <input
                type="text"
                class="form-control"
                id="Fname"
                placeholder="Enter First name"
                name="F_Name"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-6 col-12">
              <label for="Lname">Last Name:</label>
              <input
                type="text"
                class="form-control"
                id="Lname"
                placeholder="Enter Last name"
                name="L_Name"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-6 col-12">
              <label for="Email">Email Address:</label>
              <input
                type="Email"
                class="form-control"
                id="Email"
                placeholder="Enter Email Address"
                name="Email"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-6 col-12 ">
              <label for="DOB">DOB:</label>
              <input
                type="date"
                class="form-control bg-transparent"
                id="DOB"
                placeholder="Enter DOB"
                name="DOB"
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-lg-6 col-12">
              <label for="CNIC">Id Card Number:</label>
              <input
                type="Number"
                class="form-control bg-transparent"
                id="CNIC"
                placeholder="Enter Id card Number"
                name="CNIC"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-6 col-12">
              <label for="Phone_No">Phone Number:</label>
              <input
                type="Number"
                class="form-control bg-transparent"
                id="Phone_No"
                placeholder="Enter Phone Number"
                name="Phone_No"
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-4 col-8">
              <label for="Address">Address:</label>
              <input
                type="text"
                class="form-control"
                id="Address"
                placeholder="Enter Address"
                name="Address"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-2 col-4">
              <label for="City">City:</label>
              <input
                type="text"
                class="form-control"
                id="City"
                placeholder="Enter City"
                name="City"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-2 col-4">
              <label for="State">Province/State:</label>
              <input
                type="text"
                class="form-control"
                id="State"
                placeholder="Enter Province / State"
                name="State"
                required
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group col-lg-2 col-4">
              <label for="Country">Country:</label>
              <input
                type="text"
                class="form-control"
                id="Country"
                placeholder="Enter Country Name"
                name="Country"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-2 col-4">
              <label for="Zip_code">ZIP Code:</label>
              <input
                type="text"
                class="form-control"
                id="Zip_code"
                placeholder="Enter ZIP / State"
                name="Zip_code"
                required
                onChange={this.handleChange}
              />
            </div>
            {/* <div class="form-group col-lg-6 col-12">
              <label for="Password">Enter Password:</label>
              <input
                type="Password"
                class="form-control"
                id="Password"
                placeholder="Enter Password"
                name="Password"
                required
                onChange={this.handleChange}
              />
            </div>

            <div class="form-group col-lg-6 col-12">
              <label for="Password">Confirm Password:</label>
              <input
                type="Password"
                class="form-control"
                id="Password"
                placeholder="Confirm Password"
                name="Password"
                required
                onChange={this.handleChange}
              />
            </div> */}

            {/* <div class="checkbox">
                        <label>
                          <input type="checkbox" name="remember" /> Remember
                          me
                        </label>
                      </div> */}

            <input
              type="submit"
              value="Add Patient"
              className="col-sm-4 bg-light text-dark"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddPat;
