import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login, Register } from "./components";

const AuthPage = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/registration" component={Register} />
        <Redirect from="/auth" exact={true} to="/auth/login" />
        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

export default AuthPage;
