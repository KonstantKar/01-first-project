import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost } from "./Redux/appState";

export let rerenderEntireTree = (appState) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App appState={appState} addPost={addPost} />
    </React.StrictMode>
  );
};
