import React from "react";
import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import Register from "../pages/Register/Register";
import NotFoundPage from "../pages/Notfoun/NotFoundPage";
import { Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  const PUBLICK__ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/login", element: <LoginPage />, id: 2 },
    { link: "/register", element: <Register />, id: 3 },
    { link: "*", element: <NotFoundPage />, id: 4 },
  ];
  return (
    <>
      <Routes>
        {PUBLICK__ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
