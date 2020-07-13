import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    root: {
      display: "flex"
    },
    options: {
      flexDirection: "column",
      width: "50px",
      textAlign: "center",
      "& button": {
        marginTop: 10
      },
      background: theme.hv.palette.atmosphere.atmo1
    },
    content: {
      position: "relative",
      width: 210,
      marginLeft: 4,
      background: theme.hv.palette.atmosphere.atmo1
    },
    selected: {
      "& .color0": {
        fill: `${theme.hv.palette.accent.acce3} !important`
      }
    },
    hide: {
      display: "none"
    }
  });

export default styles;
