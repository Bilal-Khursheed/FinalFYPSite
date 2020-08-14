import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import App from "../../App";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      auth: false,
      navigate: false,
    };
  }
  //i was doing this for private route purpose
  /*islogin = () => {
    console.log("this is the auth for login", this.state.auth);
    return this.state.auth;
  };*/
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(" login e value", e.target.value);
  };

  handleSubmit = async (e) => {
    console.log("name" + this.state.email);
    console.log("email" + this.state.password);

    //this will assign these variable values from this.state
    const { email, password } = this.state;
    console.log("name after assigning" + email);
    //this will send data to rest api then api will send mail with given data to admin
    fetch(`/user/check/?email=${email}&&pass=${password}`)
      .then((respone) => respone.json())
      // .then(() => setTimeout(() => this.setState({ navigate: true }), 2000))
      .then((Result) => {
        if (Result.status === "success") {
          console.log("Login successFully");
          this.setState({ auth: true });
          console.log("auth after login is ", this.state.auth);
          setTimeout(() => this.setState({ navigate: true }), 20);
          
          //<Redirect to="/admin"/>;
        } else {
          
          alert("Sorrrrrry !!!! Un-authenticated User");
          window.location.reload(false);
        }
      })
      .catch((err) => console.error(err));
  };

  //   const form = await axios
  //     .post("/users/check", {
  //       email,
  //       password
  //     })
  //     .then(result => {
  //       if (result.status === 200) {
  //         console.log("login successfully");
  //         //window.location = "/";
  //       } else {
  //         console.log("login not accepted");
  //       }
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // };

  render() {
    if (this.state.navigate) {
      return <Redirect to="/admin" />;
    }
    return (
      // <div>
      // <app auth={this.state.auth} /></div>
      <div className="loginbackground">
        <div className="loginbody container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>Login</h3>
              </div>

              <div className="card-body">
                <form method="POST" onSubmit={this.handleSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      name="email"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox"/>
                    <label> Remember Me</label>
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<Link to="/signup">Sign Up</Link>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to="#">Forgot your password? </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
