import React from "react";
import { Provider } from "react-redux";

import "./App.scss";
import store from "./redux/store";
import { Navbar } from "./components/navbar/Navbar";
import Main from "./components/main/Main";
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Main />
      </div>
    </Provider>
  );
};

export default App;
