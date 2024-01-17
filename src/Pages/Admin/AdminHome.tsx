import React, { useState, createContext, useEffect } from "react";
import Header from "../../Components/Header/Header";
import { userAnalysis1 } from "../../Constants/Constants";
import "./AdminHome.scss";
import { LikeUpdateType, userAnalysisItem } from "../../Types/Types";
import Component from "../../Functions/Component";
import { useNavigate, useParams } from "react-router-dom";

export const LikeContext = createContext<LikeUpdateType | null>(null);

function AdminHome() {
  const navigate = useNavigate();

  const [like, setLikeUpdate] = useState<userAnalysisItem[] | null>(
    userAnalysis1
  );
  console.log(like, "home");
  const [page, setPage] = useState("home");

  const url = window.location.href.split("/");

  let type = url[url.length - 2];

  if (type !== "user" && type !== "admin") type = url[url.length - 3];
  const handlePageChange = (pageInput: string) => {
    setPage(pageInput);
  };

  useEffect(() => {
    console.log(like, " ad like");
  }, [like]);

  let param: number | any;
  param = useParams();

  const valueSent: LikeUpdateType = {
    like,
    setLikeUpdate,
  };
  return (
    <LikeContext.Provider value={valueSent}>
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
    </LikeContext.Provider>
  );
}

export default AdminHome;
