import { createStyles } from "@material-ui/core";

const styles = theme =>
  createStyles({
    title: {
      margin: "15px 0 0 20px"
    },
    list: {
      margin: "20px 0 0 0",
      padding: 0,
      listStyleType: "none",
      maxHeight: "calc(100vh - 120px)",
      overflow: "scroll"
    },
    component: {
      height: 30,
      margin: "10px 20px",
      border: `1px solid ${theme.hv.palette.atmosphere.atmo5}`,
      display: "flex",
      alignItems: "center",
      background: theme.hv.palette.atmosphere.atmo1,
      borderRadius: 5
    }
  });

export default styles;
