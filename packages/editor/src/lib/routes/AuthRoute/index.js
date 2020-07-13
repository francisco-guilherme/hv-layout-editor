import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkAuth } from "store/auth/thunks";
import AuthRoute from "./AuthRoute";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkAuth
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
