import React from "react";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LeftPanel, RightPanel } from "components/editor/panels";
import { Canvas } from "components/editor/canvas";
import withLayout from "lib/hocs";

const Editor = ({ classes }) => (
  <DndProvider backend={HTML5Backend}>
    <div className={classes.root}>
      <LeftPanel />
      <Canvas />
      <RightPanel />
    </div>
  </DndProvider>
);

Editor.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withLayout(Editor);
