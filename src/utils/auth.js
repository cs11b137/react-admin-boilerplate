// src/utils/auth.js
import { Redirect, Route } from "react-router-dom";

export const isAuthenticated = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "admin";
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);
