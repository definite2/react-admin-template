import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./partials/layout";
import { Logout } from "./pages/Auth/components";
import { PrivateRoutes, PublicRoutes } from "./routes";

const App = ({ basename }) => {
  const isAuthorized = useSelector(
    ({ auth }) => auth.isAuthorized,
    shallowEqual
  );

  return (
    <BrowserRouter basename={basename}>
      <Switch>
        <Route path="/logout" component={Logout} />
        {!isAuthorized ? (
          <Route>
            <PublicRoutes />
          </Route>
        ) : (
          <>
            <Layout>
              <PrivateRoutes />
            </Layout>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};
export default App;
