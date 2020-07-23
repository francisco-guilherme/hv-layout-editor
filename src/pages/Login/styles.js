import { fade, hexToRgb } from "@material-ui/core";
import background from "./img/bg.svg";

const styles = theme => ({
  container: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundImage: `url(${background})`,
    backgroundSize: "100%",
    width: "100%",
    height: "100%",
    padding: 0,
    margin: 0
  },
  item: {
    padding: "0px !important",
    marginBottom: 1
  },
  root: {
    background: fade(hexToRgb(theme.hv.palette.atmosphere.atmo2), 1),
    marginLeft: "auto",
    maxWidth: 500,
    height: "100%"
  }
});

export default styles;
