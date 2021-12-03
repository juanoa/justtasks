import React from "react";
import {Provider} from "react-redux";

import {AppRouter} from "./router/appRouter";
import {store} from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
