import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import appReducer from "./app/reducer";
import authReducer from "./auth/reducer";
import editorReducer from "./editor/reducer";

const createRootReducer = history =>
  combineReducers({
    app: appReducer,
    auth: authReducer,
    editor: editorReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
