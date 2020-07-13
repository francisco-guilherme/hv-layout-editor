import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectBreakpoint, toggleCodePanel } from "store/editor/actions";
import { getEditorBreakpopints } from "store/selectors";
import styles from "./styles";
import HeaderControls from "./HeaderControls";

const mapStateToProps = (state) => ({
  breakpoints: getEditorBreakpopints(state),
  codePanelActive: state.editor.codePanelActive
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectBreakpoint,
      toggleCodePanel
    },
    dispatch
  );

export default withStyles(styles, { name: "HeaderControls" })(
  connect(mapStateToProps, mapDispatchToProps)(HeaderControls)
);
