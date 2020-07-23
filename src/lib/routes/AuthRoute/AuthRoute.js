import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ checkAuth, auth, path, exact, redirect, component }) => {
  const { isAuthed } = auth;

  const isLogin = path === "/login";
  const route = <Route path={path} exact={exact} component={component} />;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (redirect) return <Redirect to={redirect} />;

  if (!isAuthed) {
    if (isAuthed === null) return null;
    return isLogin ? route : <Redirect to="/login" />;
  }

  return isLogin ? <Redirect to="/" /> : route;
};

AuthRoute.propTypes = {
  /**
   * Callback to trigger on check auth action.
   */
  checkAuth: PropTypes.func.isRequired,
  /**
   * The auth state object.
   */
  auth: PropTypes.shape({
    /**
     * The auth state.
     */
    isAuthed: PropTypes.bool.isRequired
  }).isRequired,
  /**
   * SRoute path.
   */
  path: PropTypes.string,
  /**
   * Set if path match is exact.
   */
  exact: PropTypes.bool,
  /**
   * Route redirect path.
   */
  redirect: PropTypes.string,
  /**
   * Route component.
   */
  component: PropTypes.elementType
};

export default AuthRoute;
