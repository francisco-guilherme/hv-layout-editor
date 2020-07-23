import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    root: {
      position: "relative",
      margin: "0 4px",
      width: "100%"
    },
    viewportWrapper: {
      postion: "absolute",
      display: "flex",
      height: "100%",
      alignItems: "center"
    },
    viewport: {
      position: "absolute",
      padding: 10,
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      background: theme.hv.palette.atmosphere.atmo1,
      overflow: "scroll"
    },
    over: {
      background: theme.hv.palette.atmosphere.atmo2
    },
    codeWrapper: {
      position: "absolute",
      top: "50%",
      width: "100%",
      height: "50%",
      background: theme.hv.palette.atmosphere.atmo1,
      borderTop: `4px solid ${theme.hv.palette.atmosphere.atmo2}`,
      overflow: "scroll",
      display: "none"
    },
    active: {
      display: "block"
    }
  });

export default styles;
