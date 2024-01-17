import React from "react";
import {
  FaHome,
  MdOutlinePlaylistAdd,
  CiLogout,
  TbLayersDifference,
  MdFavoriteBorder,
  PiListDashesLight
} from "../../Assets/index";
import "./Header.scss";
import { InputType } from "../../Types/Types";
const Header: React.FC<InputType> = ({ userType, handlePage }) => {
  const pageHandle = (page: string) => {
    handlePage(page);
  };
  const hideDashboard=()=>[

  ]

  return (
    <>
      <div className="dashboard"><PiListDashesLight className="icon" onClick={()=>hideDashboard()}/></div>
      <header className="header-comp">
        <FaHome className="icon" onClick={() => pageHandle("home")} />
        {userType === "admin" ? (
          <>
            <TbLayersDifference
              className="icon"
              onClick={() => pageHandle("genre")}
            />
            <MdOutlinePlaylistAdd
              className="icon"
              onClick={() => pageHandle("add")}
            />
          </>
        ) : (
          <MdFavoriteBorder className="icon" onClick={() => pageHandle("favorite")} />
        )}
        <CiLogout className="icon" onClick={() => pageHandle("logout")} />
      </header>
    </>
  );
};

export default Header;
