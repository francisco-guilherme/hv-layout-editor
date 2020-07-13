import React from "react";
import PropTypes from "prop-types";
import { HvLoginContainer } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { LoginForm } from "components/login";

const Login = ({ login, auth }) => {
  const { authStatus } = auth;

  return (
    <HvLoginContainer>
      <LoginForm
        status={authStatus}
        onSubmit={async credentials => login(credentials)}
      />
    </HvLoginContainer>
  );
};

Login.propTypes = {
  /**
   * Callback to trigger on login action.
   */
  login: PropTypes.func.isRequired,
  /**
   * The auth state object.
   */
  auth: PropTypes.shape({
    /**
     * The auth status.
     */
    authStatus: PropTypes.string.isRequired
  }).isRequired
};

export default withLayout(Login, true);
