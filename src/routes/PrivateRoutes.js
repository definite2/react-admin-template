import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Fallback } from "../partials/Fallback";
import Dashboard from "../pages/Dashboard";
export function PrivateRoutes() {
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect from="/auth" to="/dashboard" />
        <Redirect exact from="/" to="/dashboard" />
        <Redirect to="dashboard" />
      </Switch>
    </Suspense>
  );
}
