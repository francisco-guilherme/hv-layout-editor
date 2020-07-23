import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HvTypography } from "@hv/uikit-react-core";

const LeftPanelLayers = ({ classes }) => {
  const { t } = useTranslation();

  return (
    <HvTypography variant="labelText" className={classes.root}>
      {t("components.panels.left.layers.title")}
    </HvTypography>
  );
};

LeftPanelLayers.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default LeftPanelLayers;
