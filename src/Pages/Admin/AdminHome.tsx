import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./AdminHome.scss";
import Component from "../../Functions/Component";
import { useNavigate, useParams } from "react-router-dom";
function AdminHome() {
  const navigate = useNavigate();
  const [page, setPage] = useState("home");
  const url = window.location.href.split("/");
  let type = url[url.length - 2];
  if (type !== "user" && type !== "admin") type = url[url.length - 3];
  const handlePageChange = (pageInput: string) => {
    setPage(pageInput);
  };
  let param: number | any;
  param = useParams();
  return (
    <div className="admin-home">
      <Header userType={type} handlePage={handlePageChange} />
      <main className="main">
        {page === "logout" ? (
          <>{navigate("/")}</>
        ) : (
          <Component
            page={page}
            userType={type}
            userId={type === "user" ? parseInt(param.id) : -1}
          />
        )}
      </main>
    </div>
  );
}

export default AdminHome;
