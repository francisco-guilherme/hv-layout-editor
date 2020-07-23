import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HvTypography, HvButton } from "@hv/uikit-react-core";
import { Add } from "@hv/uikit-react-icons";

const LeftPanelPages = ({ classes, pages }) => {
  const { t } = useTranslation();

  return (
    <>
      <HvTypography variant="labelText" className={classes.root}>
        {t("components.panels.left.pages.title")}
      </HvTypography>
      {pages.map(page => (
        <div key={page.id} className={classes.page}>
          <HvTypography variant="sText"> {page.name}</HvTypography>
        </div>
      ))}
      <HvButton category="icon" className={classes.add}>
        <Add iconSize="S" />
      </HvButton>
    </>
  );
};

LeftPanelPages.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  pages: PropTypes.instanceOf(Object).isRequired
};

export default LeftPanelPages;
