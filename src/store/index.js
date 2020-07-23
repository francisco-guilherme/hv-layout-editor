import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// Provides a Redux middleware which connects to our `react-router` instance.
import { routerMiddleware } from "connected-react-router";
// Redux Devtools. Use the `composeWithDevTools()` directive so we can pass the middleware along with it
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import createRootReducer from "./rootReducer";

// Create the composing function for middlewares
const composeEnhancers = composeWithDevTools({});

// Rehydrate state on app start
const initialState = window.INITIAL_REDUX_STATE;

export const history = createBrowserHistory();

// configure middlewares
const middlewares = [thunk, routerMiddleware(history)];

// Create store with the combined reducers, and the initial Redux state.
export const store = createStore(
  createRootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);
