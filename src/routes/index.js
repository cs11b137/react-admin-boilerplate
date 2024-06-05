// src/routes/index.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import { PrivateRoute } from "../utils/auth";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const UserManagement = lazy(() => import("../pages/UserManagement"));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/users" component={UserManagement} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
