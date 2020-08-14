import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  state = {
    email: "",
    fullName: "",
    Username: "",
    password: "",
    navigate: false,
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
    const { email, fullName, Username, password } = this.state;
    console.log("name after assigning" + email);

    //this will send data to rest api then api will send mail with given data to admin
    const form = await axios
      .post("/users/add", {
        email,
        fullName,
        Username,
        password,
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
                name="fullName"
                placeholder="Your Name"
                onChange={this.handleChange}
                required="required"
              />
              <br />
              <input
                className="text"
                type="text"
                name="Username"
                placeholder="Username"
                onChange={this.handleChange}
                required="required"
              />

              <input
                className="text email"
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={this.handleChange}
                required="required"
              />
              <input
                className="text"
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={this.handleChange}
                required="required"
              />
              <input
                className="text w3lpass"
                type="password"
                name="cpassword"
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
