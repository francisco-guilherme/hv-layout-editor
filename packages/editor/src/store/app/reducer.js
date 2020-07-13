import { actions } from "./actions";

const initialState = {
  theme: "dawn"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SWITCH_THEME:
      return { ...state, theme: state.theme === "dawn" ? "wicked" : "dawn" };
    default:
      return state;
  }
};

export default reducer;
