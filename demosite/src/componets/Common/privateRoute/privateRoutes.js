import React from "react";
import { Route, Redirect } from "react-router-dom";
//import { islogin } from "../../Pages/Login";
//./componets/Pages/Login"
const PrivateRoute = ({ component: Component,auth, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

/*import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import isEmpty from "./isEmpty";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  let route =
    (auth.isAuthenticated &&
      !isEmpty(auth.user) &&
      !isEmpty(auth.user.organisation_id)) ||
    (auth.isAuthenticated && rest.path === "/admin") ? (
      <Component {...rest} />
    ) : auth.isAuthenticated && !isEmpty(auth.user) ? (
      <Redirect to="/admin" />
    ) : (
      <Redirect to="/" />
    );
  return <Route {...rest} render={(props) => route} />;
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PrivateRoute);
*/
