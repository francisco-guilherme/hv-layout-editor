import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addComponent } from "store/editor/actions";
import { getComponents } from "store/editor/thunks";
import { getEditorComponents } from "store/selectors";
import styles from "./styles";
import LeftPanelComponents from "./LeftPanelComponents";

const mapStateToProps = state => ({
  components: getEditorComponents(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getComponents,
      addComponent
    },
    dispatch
  );

export default withStyles(styles, { name: "LeftPanelComponents" })(
  connect(mapStateToProps, mapDispatchToProps)(LeftPanelComponents)
);
