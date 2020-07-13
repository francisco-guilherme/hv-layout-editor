import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { HvTypography } from "@hv/uikit-react-core";

const CanvasComponent = ({ classes, editor, selectComponent, component }) => {
  const { selectedComponent } = editor;
  const { id, name } = component;

  const handleClick = evt => {
    evt.stopPropagation();
    const isSame = id === selectedComponent?.id;
    selectComponent(isSame ? null : component);
  };

  return (
    <div
      role="presentation"
      className={clsx(classes.component, {
        [classes.selected]: selectedComponent?.id === id
      })}
      onClick={handleClick}>
      <HvTypography variant="highlightText">{name}</HvTypography>
    </div>
  );
};

CanvasComponent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  editor: PropTypes.instanceOf(Object).isRequired,
  component: PropTypes.instanceOf(Object).isRequired,
  selectComponent: PropTypes.func.isRequired
};

export default CanvasComponent;
