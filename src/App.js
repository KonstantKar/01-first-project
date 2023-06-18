import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthAccountDataTC, loginAccountTC } from "./Redux/authReducer";
import Loader from "./Components/Loader/Loader";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
const ProfileContainer = lazy(() =>
  import("./Components/Profile/ProfileContainer")
);
const Settings = lazy(() => import("./Components/Settings/Settings"));
const DialogsContainer = lazy(() =>
  import("./Components/Dialogs/DialogsContainer")
);
const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"));
const MusicContainer = lazy(() => import("./Components/Music/MusicContainer"));
const NewsContainer = lazy(() => import("./Components/News/NewsContainer"));
const SingleNewsContainer = lazy(() =>
  import("./Components/News/SingleNews/SingleNewsContainer")
);
const LoginForm = lazy(() => import("./Components/Login/LoginForm"));

const App = () => {
  const dispatch = useDispatch();
  const isInitialized = useSelector((state) => state.auth.isInitialized);

  const getAuthAccountData = () => {
    dispatch(getAuthAccountDataTC());
  };

  useEffect(() => {
    getAuthAccountData();
  }, []);

  return (
    <HashRouter basename="/">
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Loader />}>
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
                  isInitialized ? (
                    <Navigate to="/profile" replace />
                  ) : (
                    <LoginForm handleSubmit={handleSubmit} />
                  )
                }
              />
              <Route path="*" element={<div>Страница не найдена</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
