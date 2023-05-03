import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/appState";
import { updateNewPostChange } from "./Redux/appState";
import { addNewMessage } from "./Redux/appState";
import { updateNewMessageChange } from "./Redux/appState";
const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (appState) => {
  root.render(
    <React.StrictMode>
      <App
        appState={appState}
        addPost={addPost}
        updateNewPostChange={updateNewPostChange}
        addNewMessage={addNewMessage}
        updateNewMessageChange={updateNewMessageChange}
      />
    </React.StrictMode>
  );
};
