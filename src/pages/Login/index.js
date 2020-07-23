import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from "store/auth/thunks";
import styles from "./styles";
import Login from "./Login";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export default withStyles(styles, { name: "Login" })(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
