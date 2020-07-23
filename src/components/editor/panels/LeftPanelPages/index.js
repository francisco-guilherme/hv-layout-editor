import { withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import styles from "./styles";
import LeftPanelPages from "./LeftPanelPages";

const mapStateToProps = state => ({
  pages: state.editor.pages
});

export default withStyles(styles, { name: "LeftPanelPages" })(
  connect(mapStateToProps)(LeftPanelPages)
);
