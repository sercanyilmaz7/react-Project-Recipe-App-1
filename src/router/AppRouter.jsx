import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/Global.styles";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Detail from "../pages/details/Detail";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import PrivateRouter from "./PrivateRouter";
import Footer from "../components/footer/Footer";

const AppRouter = ({themeToogle}) => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route> */}

        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
      </Routes>
      <Footer themeToogle={themeToogle} />
    </BrowserRouter>
  );
};

export default AppRouter;
