import "./index.css";
import reportWebVitals from "./reportWebVitals";
import appState, { subscribe } from "./Redux/appState";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { addPost } from "./Redux/appState";
import { updateNewPostChange } from "./Redux/appState";
import { addNewMessage } from "./Redux/appState";
import { updateNewMessageChange } from "./Redux/appState";
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (appState) => {
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

rerenderEntireTree(appState);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
