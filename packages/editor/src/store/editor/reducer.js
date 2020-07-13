import produce from "immer";
import shortid from "shortid";

import { actions } from "./actions";

const initialState = {
  pages: [{ id: "page-1", name: "Page 1", components: [] }],
  components: [],
  breakpoints: [
    {
      id: "bp-1",
      label: "Desktop",
      width: "100%",
      height: "100%",
      selected: true
    },
    { id: "bp-2", label: "Mobile S", width: "320px", height: "90%" },
    { id: "bp-3", label: "Mobile M", width: "375px", height: "90%" },
    { id: "bp-4", label: "Mobile L", width: "425px", height: "90%" },
    { id: "bp-5", label: "Tablet", width: "768px", height: "90%" },
    { id: "bp-6", label: "Laptop", width: "1024px", height: "90%" }
  ],
  selectedPanel: "components",
  selectedPage: "page-1",
  selectedBreakpoint: "bp-1",
  selectedComponent: null,
  codePanelActive: false
};

const reducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.ADD_COMPONENTS: {
      draft.components = payload;
      return draft;
    }

    case actions.ADD_COMPONENT: {
      draft.pages.filter(page => {
        page.components.push({ ...{ id: shortid.generate() }, ...payload });
      });
      return draft;
    }

    case actions.SELECT_COMPONENT: {
      draft.selectedComponent = payload;
      return draft;
    }

    case actions.SELECT_PANEL: {
      draft.selectedPanel = payload;
      return draft;
    }

    case actions.SELECT_BREAKPOINT: {
      draft.selectedBreakpoint = payload;
      return draft;
    }

    case actions.TOGGLE_CODE_PANEL: {
      draft.codePanelActive = payload;
      return draft;
    }

    default: {
      return draft;
    }
  }
}, initialState);

export default reducer;
