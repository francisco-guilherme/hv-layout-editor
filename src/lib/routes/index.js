import React from "react";
import { Route, Switch } from "react-router";
import Login from "pages/Login";
import Editor from "pages/Editor";
import NotFound from "pages/NotFound";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/editor" />
    <AuthRoute path="/editor" component={Editor} />
    <AuthRoute path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
