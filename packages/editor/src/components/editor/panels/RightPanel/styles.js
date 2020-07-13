import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    root: {
      width: 260,
      marginLeft: "auto",
      background: theme.hv.palette.atmosphere.atmo1
    },
    title: {
      margin: "15px 0 0 20px"
    },
    componentsList: {
      margin: "10px 20px",
      padding: 0,
      listStyleType: "none",
      maxHeight: "calc(100vh - 120px)",
      overflow: "scroll"
    },
    component: {
      height: 30,
      margin: "5px 0",
      display: "flex",
      alignItems: "center",
      background: theme.hv.palette.atmosphere.atmo1,
      borderRadius: 5
    },
    propsList: {
      margin: "10px 20px",
      padding: 0,
      listStyleType: "none",
      maxHeight: "calc(100vh - 120px)",
      overflow: "scroll"
    },
    prop: {
      height: 30,
      margin: "5px 0",
      display: "flex",
      alignItems: "center",
      background: theme.hv.palette.atmosphere.atmo1,
      borderRadius: 5
    },
    input: {
      width: "100px !important"
    }
  });

export default styles;
