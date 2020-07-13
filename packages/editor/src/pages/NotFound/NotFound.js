import React from "react";
import PropTypes from "prop-types";
import { HvTypography } from "@hv/uikit-react-core";
import withLayout from "lib/hocs/withLayout";
import { useTranslation } from "react-i18next";

const NotFound = ({ classes }) => {
  const { t } = useTranslation();
  return (
    <HvTypography variant="3xlTitle" className={classes.title}>
      {t("pages.notFound.title")}
    </HvTypography>
  );
};

NotFound.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withLayout(NotFound);
