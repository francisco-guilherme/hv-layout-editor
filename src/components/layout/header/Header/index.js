import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { switchTheme } from "store/app/actions";
import { logout } from "store/auth/thunks";
import styles from "./styles";
import Header from "./Header";

const mapStateToProps = ({ app, auth }) => ({
  app,
  auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      switchTheme,
      logout
    },
    dispatch
  );

export default withStyles(styles, { name: "Header" })(
  connect(mapStateToProps, mapDispatchToProps)(Header)
);
