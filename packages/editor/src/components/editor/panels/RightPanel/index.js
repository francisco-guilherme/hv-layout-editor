import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { getSelectedComponent, getPageComponents } from "store/selectors";
import styles from "./styles";
import RightPanel from "./RightPanel";

const mapStateToProps = state => ({
  selectedComponent: getSelectedComponent(state),
  pageComponents: getPageComponents(state)
});

export default withStyles(styles, { name: "RightPanel" })(
  connect(mapStateToProps)(RightPanel)
);
