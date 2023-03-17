import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    // const user =false
    const user = JSON.parse(sessionStorage.getItem("user"))
    // console.log(user)
  return (
    user ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRouter;


//? tek PrivateRouter ıle tüm hepsine yapıyoruz. tek tek tanımlamaya gerek yok.