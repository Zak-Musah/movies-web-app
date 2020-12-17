import React from "react";
import { Provider } from "react-redux";

import "./App.scss";
import store from "./redux/store";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <h1>Setup React Redux</h1>
      </div>
    </Provider>
  );
};

export default App;
