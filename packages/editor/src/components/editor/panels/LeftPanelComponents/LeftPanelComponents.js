import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { HvTypography } from "@hv/uikit-react-core";
import { Drag } from "@hv/uikit-react-icons";
import { useDrag } from "react-dnd";

const LeftPanelComponents = ({
  classes,
  components,
  getComponents,
  addComponent
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    getComponents();
  }, [getComponents]);

  const Component = ({ name }) => {
    const [{ isDragging }, drag] = useDrag({
      item: { name, type: "component" },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) addComponent(item);
      },
      collect: monitor => ({
        isDragging: monitor.isDragging()
      })
    });

    return (
      <li ref={drag} className={classes.component}>
        <Drag iconSize="XS" />
        <HvTypography variant="sText">{name}</HvTypography>
      </li>
    );
  };

  return (
    <div className={classes.root}>
      <HvTypography variant="labelText" className={classes.title}>
        {t("components.panels.left.components.title")}
      </HvTypography>
      <ul className={classes.list}>
        {components.map(component => (
          <Component key={component.name} name={component.name} />
        ))}
      </ul>
    </div>
  );
};

LeftPanelComponents.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  components: PropTypes.instanceOf(Array).isRequired,
  getComponents: PropTypes.func.isRequired,
  addComponent: PropTypes.func.isRequired
};

export default LeftPanelComponents;
