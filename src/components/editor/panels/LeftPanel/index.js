import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectPanel } from "store/editor/actions";
import { getEditorSelectedPanel } from "store/selectors";
import styles from "./styles";
import LeftPanel from "./LeftPanel";

const mapStateToProps = state => ({
  selectedPanel: getEditorSelectedPanel(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectPanel
    },
    dispatch
  );

export default withStyles(styles, { name: "LeftPanel" })(
  connect(mapStateToProps, mapDispatchToProps)(LeftPanel)
);
