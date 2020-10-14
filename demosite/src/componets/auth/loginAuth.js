import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Auth {
  constructor() {
    this.authenticated = false;
    this.auth = false;
    this.navigate = false;
    this.role = 0;
  }
  /*state = {
    auth: false,
    navigate: false,
    role: 0,
  };*/

  async login(email, pass) {
    // const email = "bilal.khursheed617@gmail.com";
    // const pass = "12345";
    await fetch(`/user/check/?email=${email}&&pass=${pass}`)
      //fetch(`/user/check/?email="Bilal.khursheed617@gmail.com" && pass="12345"`)
      .then((respone) => respone.json())
      // .then(() => setTimeout(() => this.setState({ navigate: true }), 2000))
      .then((Result) => {
        if (Result.status === "success") {
          this.authenticated = true;
          if (Result.role === "doctor") {
            sessionStorage.setItem("doctor", JSON.stringify(Result));
            console.log("doctor Login successFully");
            //this.setState({ auth: true });
            //this.setState({ role: 1 });
            this.role = 1;
            // console.log("auth after login is ", this.state.auth);
            //setTimeout(() => this.setState({ navigate: true }), 20);\

            setTimeout(() => (this.navigate = true), 20);
            //this.props.history.push("/adminportal");
          } else if (Result.role === "Admin") {
            // localStorage.setItem("admin", JSON.stringify(Result));
            sessionStorage.setItem("admin", JSON.stringify(Result));
            console.log("admin Login successFully");
            //this.props.history.push("/adminportal");
            //this.setState({ auth: true });
            //this.setState({ role: 2 });
            this.role = 2;
            // console.log("auth after login is ", this.state.auth);
            setTimeout(() => (this.navigate = true), 20);
            console.log(sessionStorage.getItem("admin"));
            var data = sessionStorage.getItem("admin");
            var data2 = JSON.parse(data);
            //var detials=JSON.parse( data2.data)
            var i = "";
            for (i in data2.data) {
              console.log(data2.data[i].F_Name);
            }
          } else if (Result.role === "patient") {
            sessionStorage.setItem("patient", JSON.stringify(Result));
            console.log("patient Login successFully");
            //this.setState({ auth: true });
            //this.setState({ role: 3 });
            this.role = 3;
            // console.log("auth after login is ", this.state.auth);
            setTimeout(() => (this.navigate = true), 20);
          }
          //console.log("Login successFully");
          //this.setState({ auth: true });
          // console.log("auth after login is ", this.state.auth);
          //setTimeout(() => this.setState({ navigate: true }), 20);

          //<Redirect to="/admin"/>;

          //return true;
        } else {
          alert("Sorry! Un-authenticated User");
          window.location.reload(false);
          return false;
        }
      })
      .catch((err) => console.error(err));
    // return false;
    this.authenticated = true;
    //return true;
    // cb();
    return true;
  }

  logout() {
    // localStorage.clear();
    sessionStorage.clear();
  }

  isAuthenticated() {
    return this.authenticated;
  }
  isnavigation() {
    return this.navigate;
  }
  isRole() {
    return this.role;
  }
}

export default new Auth();
