export const actions = {
  ADD_COMPONENTS: "@@components/ADD_COMPONENTS",
  ADD_COMPONENT: "@@editor/ADD_COMPONENT",
  SELECT_COMPONENT: "@@editor/SELECT_COMPONENT",
  SELECT_PANEL: "@@editor/SELECT_PANEL",
  SELECT_BREAKPOINT: "@@editor/SELECT_BREAKPOINT",
  TOGGLE_CODE_PANEL: "@@editor/TOGGLE_CODE_PANEL"
};

export const addComponents = components => ({
  type: actions.ADD_COMPONENTS,
  payload: components
});

export const addComponent = component => ({
  type: actions.ADD_COMPONENT,
  payload: component
});

export const selectComponent = componentId => ({
  type: actions.SELECT_COMPONENT,
  payload: componentId
});

export const selectPanel = panelId => ({
  type: actions.SELECT_PANEL,
  payload: panelId
});

export const selectBreakpoint = breakpointId => ({
  type: actions.SELECT_BREAKPOINT,
  payload: breakpointId
});

export const toggleCodePanel = isActive => ({
  type: actions.TOGGLE_CODE_PANEL,
  payload: isActive
});
