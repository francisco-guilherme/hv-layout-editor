import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { CanvasComponent } from "components/editor/canvas";
import { CodePanel } from "components/editor/panels";

const Canvas = ({ classes, editor, selectComponent }) => {
  const {
    breakpoints,
    selectedBreakpoint,
    pages,
    selectedPage,
    codePanelActive
  } = editor;
  const { components } = pages.find(page => page.id === selectedPage);

  const { width, height } = breakpoints.find(
    breakpoint => breakpoint.id === selectedBreakpoint
  );

  const handleClick = () => {
    selectComponent(null);
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "component",
    drop: () => ({ name: "Canvas" }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const Viewport = () => (
    <div
      className={clsx(classes.viewport, {
        [classes.over]: canDrop && isOver
      })}
      ref={drop}
      style={{ width, height, maxHeight: height }}
      role="presentation"
      onClick={handleClick}>
      {components.map(component => (
        <CanvasComponent key={component.id} component={component} />
      ))}
    </div>
  );

  return (
    <section className={classes.root}>
      <div className={classes.viewportWrapper}>
        <Viewport />
      </div>
      <div
        className={clsx(classes.codeWrapper, {
          [classes.active]: codePanelActive
        })}>
        <CodePanel />
      </div>
    </section>
  );
};

Canvas.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  editor: PropTypes.instanceOf(Object).isRequired,
  selectComponent: PropTypes.func.isRequired
};

export default Canvas;
