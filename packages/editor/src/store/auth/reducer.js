import { AuthActions } from "./actions";

const initialState = {
  isAuthed: false,
  authStatus: "idle"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.SET_IS_AUTHED:
      return { ...state, isAuthed: action.isAuthed };
    case AuthActions.SET_AUTH_STATUS:
      return { ...state, authStatus: action.authStatus };
    default:
      return state;
  }
};

export default reducer;
