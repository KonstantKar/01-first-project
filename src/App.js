import React from "react";
import "./App.css";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import MusicContainer from "./Components/Music/MusicContainer";
import NewsContainer from "./Components/News/NewsContainer";
import SingleNewsContainer from "./Components/News/SingleNews/SingleNewsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/news/" element={<NewsContainer />} />
            <Route path="/news/:newsId" element={<SingleNewsContainer />} />
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
