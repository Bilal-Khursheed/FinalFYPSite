import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import App from "../../App";
import axios from "axios";
import auth from "../auth/loginAuth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      auth: false,
      navigate: false,
      role: 0,
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
    e.preventDefault();
    //this will assign these variable values from this.state
    const { email, password } = this.state;
    console.log("name after assigning" + email);
    //this will send data to rest api then api will send mail with given data to admin
    /*if (auth.login(email, password)) {
      if (auth.isAuthenticated) {
        this.setState({ navigate: auth.isnavigation }, { role: auth.isRole });
      } else {
        alert("is Auth is not working");
      }
    }*/
    /*if ((await auth.login()) === true) {
      if (auth.isnavigation === true) {
        console.log("navigated");
        if (auth.isRole == 2) {
          console.log(" roles i s gotted");
          this.props.history.push("/adminportal");
        } else {
          console.log("could not found role");
        }
      } else if (auth.isnavigation === false) {
        console.log("not nei");
      }
    }*/
    if (await auth.login(email, password)) {
      if (localStorage.getItem("doctor")) {
        this.setState({ auth: true });
        this.setState({ role: 1 });

        // console.log("auth after login is ", this.state.auth);
        setTimeout(() => this.setState({ navigate: true }), 20);
      } else if (localStorage.getItem("admin")) {
        this.setState({ auth: true });
        this.setState({ role: 2 });

        // console.log("auth after login is ", this.state.auth);
        setTimeout(() => this.setState({ navigate: true }), 20);
      } else if (localStorage.getItem("patient")) {
        this.setState({ auth: true });
        this.setState({ role: 3 });

        // console.log("auth after login is ", this.state.auth);
        setTimeout(() => this.setState({ navigate: true }), 20);
      }
    }
    /* auth.login(() => {
      //this.setState({ role: auth.isRole }, { navigate: auth.isnavigation });
      if (auth.isnavigation) {
        if (auth.isRole == 2) {
          this.props.history.push("/adminportal");
        } else {
          alert("not working");
        }
      }*/
    //});
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
      if (this.state.role === 1) {
        return <Redirect to="/doctorportal" />;
      } else if (this.state.role === 2) {
        return <Redirect to="/adminportal" />;
      } else if (this.state.role === 3) {
        return <Redirect to="/patientportal" />; //patientportal
      }
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
                    <input type="checkbox" />
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
