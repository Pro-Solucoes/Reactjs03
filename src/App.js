import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodosList from "./TodoList";

const App = () => (
  <Provider store={store}>
    <TodosList />
    <h1>Ola</h1>
  </Provider>
);

export default App;
