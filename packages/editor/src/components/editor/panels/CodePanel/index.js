import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toggleCodePanel } from "store/editor/actions";
import { getPageComponents } from "store/selectors";
import styles from "./styles";
import CodePanel from "./CodePanel";

const mapStateToProps = (state) => ({
  codePanelActive: state.editor.codePanelActive,
  pageComponents: getPageComponents(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleCodePanel
    },
    dispatch
  );

export default withStyles(styles, { name: "CodePanel" })(
  connect(mapStateToProps, mapDispatchToProps)(CodePanel)
);
