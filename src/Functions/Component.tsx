import React from "react";
import Genre from "../Components/PageContent/Genre/Genre";
import Home from "../Components/PageContent/Home/Home";
import UserHome from "../Components/UserHome/Home/Home";
import Favorite from "../Components/UserHome/Favourite/Favorite";
import Add2List from "../Components/PageContent/AddedList/Add2List";
interface Componen {
  page: string;
  userType: string;
  userId?: number;
}
const Component: React.FC<Componen> = ({ page, userType, userId }) => {
  if (page === "home") {
    if (userType === "admin") return <Home />;
    else return <Genre usertype={userType} userId={userId}/>;
  } else if (page === "genre") return <Genre usertype={userType} />;
  else if (page === "add") return <Add2List />;
  else if (page === "favorite") return <Favorite userId={userId}/>;
  else return <></>;
  //  else if(page==)
};

export default Component;
