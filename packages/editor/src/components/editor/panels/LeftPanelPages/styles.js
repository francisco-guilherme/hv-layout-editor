import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    root: {
      margin: "15px 0 0 20px"
    },
    page: {
      display: "flex",
      width: 80,
      height: 100,
      border: `1px solid ${theme.hv.palette.atmosphere.atmo5}`,
      background: theme.hv.palette.atmosphere.atmo1,
      borderRadius: 5,
      padding: 10,
      margin: 20,
      alignItems: "center",
      justifyContent: "center"
    },
    add: {
      position: "absolute",
      top: 5,
      right: 5
    }
  });

export default styles;
