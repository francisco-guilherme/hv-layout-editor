import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    component: {
      display: "inline-flex",
      width: 130,
      height: 130,
      border: `1px solid ${theme.hv.palette.atmosphere.atmo5}`,
      background: theme.hv.palette.atmosphere.atmo1,
      borderRadius: 5,
      padding: 10,
      margin: "0 10px 10px 0"
    },
    selected: {
      border: `1px solid ${theme.hv.palette.accent.acce3}`,
      color: theme.hv.palette.accent.acce3
    }
  });

export default styles;
