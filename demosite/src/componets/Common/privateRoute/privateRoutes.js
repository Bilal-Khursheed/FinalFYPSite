import React from "react";
import { Route, Redirect } from "react-router-dom";

 export const ProtectedRoute = ({ component:Cmp, ...rest }) => (
  <Route
    {...rest}
    render={(props) => 
      sessionStorage.getItem("admin") ? (
        <Cmp {...props} />
      ) : 
      sessionStorage.getItem("doctor")?
      <Cmp {...props}/>:
      sessionStorage.getItem("patient")?
      <Cmp {...props}/>:
      
        <Redirect to="/login" />
      
    }
  />
);

/*
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
*/
