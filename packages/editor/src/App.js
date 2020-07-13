import React, { useState, Suspense } from "react";
import { Provider } from "react-redux";
import { HvProvider } from "@hv/uikit-react-core";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "store";
import Routes from "lib/routes";
import "../config/i18n";

const getTheme = () => store.getState().app.theme;

const App = () => {
  const [theme, setTheme] = useState(getTheme());

  store.subscribe(() => {
    const nextTheme = getTheme();
    if (nextTheme !== theme) setTheme(nextTheme);
  });

  return (
    <Provider store={store}>
      <HvProvider uiKitTheme={theme}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </ConnectedRouter>
      </HvProvider>
    </Provider>
  );
};

export default App;
