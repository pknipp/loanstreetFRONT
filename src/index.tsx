import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./features/App/App"
import reducer from "./redux/reducer";
import "./index.scss";

const store = createStore(reducer);

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppContainer />, document.getElementById("root"));

export default AppContainer;
