import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
import { TodoApp } from "./TodoApp";
//import { PokemonApp } from "./PokemonApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </StrictMode>
);
