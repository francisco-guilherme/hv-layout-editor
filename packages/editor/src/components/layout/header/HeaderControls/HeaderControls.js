import React from "react";
import PropTypes from "prop-types";
import { HvDropdown, HvSwitch, HvTypography } from "@hv/uikit-react-core";

const HeaderControls = ({
  classes,
  codePanelActive,
  breakpoints,
  selectBreakpoint,
  toggleCodePanel
}) => {
  const values = breakpoints.map((bp, i) => {
    return i === 0
      ? bp
      : {
          ...bp,
          label: `${bp.label} - ${bp.width}`
        };
  });

  return (
    <div className={classes.root}>
      <HvSwitch
        className={classes.switch}
        checked={codePanelActive}
        labels={{
          left: "Code",
          right: ""
        }}
        onChange={(evt, value) => toggleCodePanel(value)}
      />
      <HvTypography variant="normalText">
        Viewport&nbsp;&nbsp;
      </HvTypography>
      <HvDropdown
        id="dropdown7"
        onChange={item => selectBreakpoint(item.id)}
        values={values}
        singleSelectionToggle={false}
        classes={{
          root: classes.dropdown
        }}
      />
    </div>
  );
};

HeaderControls.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  codePanelActive: PropTypes.bool.isRequired,
  breakpoints: PropTypes.instanceOf(Object).isRequired,
  selectBreakpoint: PropTypes.func.isRequired,
  toggleCodePanel: PropTypes.func.isRequired
};

export default HeaderControls;
