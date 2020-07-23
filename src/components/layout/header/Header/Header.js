import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useMediaQuery, useTheme } from "@material-ui/core";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions
} from "@hv/uikit-react-core/dist/Header";
import { HvButton } from "@hv/uikit-react-core";
import { ThemeSwitcher, LogOut } from "@hv/uikit-react-icons";
import HitachiLogo from "assets/HitachiLogo";
import { HeaderControls } from "components/layout/header";

const Header = ({ classes, auth, switchTheme, logout }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { isAuthed } = auth;

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <HvHeader>
      <HvHeaderBrand
        logo={<HitachiLogo />}
        name={!isXs ? t("components.layout.header.appName") : undefined}
      />

      {isAuthed && isMdUp && (
        <div className={classes.controls}>
          <HeaderControls />
        </div>
      )}

      <HvHeaderActions>
        <HvButton category="icon" onClick={() => switchTheme()}>
          <ThemeSwitcher />
        </HvButton>
        {isAuthed && isMdUp && (
          <HvButton category="icon" onClick={() => logout()}>
            <LogOut />
          </HvButton>
        )}
      </HvHeaderActions>
    </HvHeader>
  );
};

Header.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  switchTheme: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
