import { withStyles } from "@material-ui/core";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { selectComponent } from "store/editor/actions";
import styles from "./styles";
import Canvas from "./Canvas";

const mapStateToProps = ({ editor }) => ({
  editor
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectComponent
    },
    dispatch
  );

export default withStyles(styles, { name: "Canvas" })(
  connect(mapStateToProps, mapDispatchToProps)(Canvas)
);
