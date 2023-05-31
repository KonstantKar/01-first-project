import React, { useState } from "react";
import "./App.css";
import NavbarContainer from "./Components/Navbar/NavbarContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import MusicContainer from "./Components/Music/MusicContainer";
import NewsContainer from "./Components/News/NewsContainer";
import SingleNewsContainer from "./Components/News/SingleNews/SingleNewsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginForm from "./Components/Login/LoginForm";
import { useDispatch } from "react-redux";
import { loginAccountTC, setIsAuthAC } from "./Redux/authReducer";

const App = () => {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (values) => {
    dispatch(loginAccountTC(values));
    setIsAuthenticated(true);
  };

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
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/profile" replace />
                ) : (
                  <LoginForm handleSubmit={handleSubmit} />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
