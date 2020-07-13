import React from "react";
import PropTypes from "prop-types";
import { HvTypography } from "@hv/uikit-react-core";
import { DropRightXS } from "@hv/uikit-react-icons";

const parseProps = component => {
  if (!component) return [];
  return Object.entries(component.doc.props).map(prop => prop);
};

const RightPanel = ({ classes, selectedComponent, pageComponents }) => {
  const title = selectedComponent?.name || "Layout";
  const componentProps = parseProps(selectedComponent);

  const Component = ({ name }) => (
    <li className={classes.component}>
      <DropRightXS iconSize="XS" />
      <HvTypography variant="sText">{name}</HvTypography>
    </li>
  );

  const ComponentsList = () => (
    <ul className={classes.componentsList}>
      {pageComponents.map(component => (
        <Component key={component.id} name={component.name} />
      ))}
    </ul>
  );

  const PropsList = () => (
    <ul className={classes.propsList}>
      {componentProps.map((prop, i) => (
        <Prop key={i} prop={prop} />
      ))}
    </ul>
  );

  const Prop = ({ prop }) => {
    return (
      <li className={classes.prop}>
        <HvTypography variant="sText">{prop[0]}</HvTypography>
      </li>
    );
  };

  return (
    <section className={classes.root}>
      <HvTypography variant="labelText" className={classes.title}>
        {title}
      </HvTypography>
      {!selectedComponent && <ComponentsList />}
      {selectedComponent && <PropsList />}
    </section>
  );
};

RightPanel.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  selectedComponent: PropTypes.instanceOf(Object),
  pageComponents: PropTypes.instanceOf(Array)
};

export default RightPanel;
