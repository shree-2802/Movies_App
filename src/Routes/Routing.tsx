import React from "react";
import Landing from "../Pages/Landing/Landing";
import UserSign from "../Pages/SignIn/Sign";
import AdminHome from "../Pages/Admin/AdminHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/user" element={<UserSign />} />
          <Route path="/admin" element={<UserSign />} />
          <Route path="/user/home/:id" element={<AdminHome />} />
          <Route path="/admin/home" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
