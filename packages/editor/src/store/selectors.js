import { createSelector } from "reselect";

const componentsSelector = state => state.editor.components;
const selectedPanelSelector = state => state.editor.selectedPanel;
const selectedComponentSelector = state => state.editor.selectedComponent;
const breakpointsSelector = state => state.editor.breakpoints;
const pagesSelector = state => state.editor.pages;
const selectedPageSelector = state => state.editor.selectedPage;

export const getEditorComponents = createSelector(
  [componentsSelector],
  components => components
);

export const getEditorSelectedPanel = createSelector(
  [selectedPanelSelector],
  selectedPanel => selectedPanel
);

export const getEditorBreakpopints = createSelector(
  [breakpointsSelector],
  breakpoints => breakpoints
);

export const getPageComponents = createSelector(
  [pagesSelector, selectedPageSelector],
  (pages, selectedPage) =>
    pages.filter(page => page.id === selectedPage)[0].components
);

export const getSelectedComponent = createSelector(
  [componentsSelector, selectedComponentSelector],
  (components, selectedComponent) =>
    components.filter(
      component => component.name === selectedComponent?.name
    )[0]
);
