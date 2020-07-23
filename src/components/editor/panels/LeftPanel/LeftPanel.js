import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { HvButton } from "@hv/uikit-react-core";
import { Components, Template } from "@hv/uikit-react-icons";
import { LeftPanelComponents, LeftPanelPages } from "components/editor/panels";

const LeftPanel = ({ classes, selectedPanel, selectPanel }) => {
  const handlePanelChange = panel => {
    const isSame = panel === selectedPanel;
    selectPanel(isSame ? null : panel);
  };

  const isSelected = panel => selectedPanel && panel === selectedPanel;

  const Options = () => {
    return (
      <>
        <HvButton
          category="icon"
          onClick={() => handlePanelChange("components")}>
          <Components
            classes={{
              root: clsx(isSelected("components") && classes.selected)
            }}
          />
        </HvButton>
        <HvButton category="icon" onClick={() => handlePanelChange("pages")}>
          <Template
            classes={{ root: clsx(isSelected("pages") && classes.selected) }}
          />
        </HvButton>
      </>
    );
  };

  const ContentPanel = () => {
    switch (selectedPanel) {
      case "pages":
        return <LeftPanelPages />;
      default:
        return <LeftPanelComponents />;
    }
  };

  return (
    <section className={classes.root}>
      <div className={classes.options}>
        <Options />
      </div>
      <div
        className={clsx(classes.content, {
          [classes.hide]: !selectedPanel
        })}>
        <ContentPanel />
      </div>
    </section>
  );
};

LeftPanel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  selectedPanel: PropTypes.string,
  selectPanel: PropTypes.func.isRequired
};

export default LeftPanel;
