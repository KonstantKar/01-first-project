import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import MusicContainer from "./Components/Music/MusicContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/music" element={<MusicContainer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
