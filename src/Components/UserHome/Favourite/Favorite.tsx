import React, { useContext } from "react";
import { TypeCheck } from "../../../Constants/Constants";
import "./Favorites.scss";
import { LikeContext } from "../../../Pages/Admin/AdminHome";
import {
  favorite,
  Check,
  ItemWithLink,
  userAnalysisItem,
} from "../../../Types/Types";
const Favorite = ({ userId }: favorite) => {
  const arraySet = useContext(LikeContext);
  console.log(arraySet)
  let val: userAnalysisItem | any = [];
  if (arraySet?.like) {
    console.log(arraySet?.like)
    val = arraySet.like.find((item) => item.id === userId);
  }

  console.log(val, "  val");

  const handleFavorites = (item: Check) => {
    let Array: any = [];
    if (val?.like[0][item]) {
      val?.like[0][item].map((ind: number) => {
        if (TypeCheck[item][ind] && "link" in TypeCheck[item][ind]) {
          const currentLink = TypeCheck[item][ind] as ItemWithLink;
          Array.push(
            <div key={ind}>
              <img src={currentLink.link} alt="shiv" />
              <p>{currentLink.name}</p>
            </div>
          );
          return <></>;
        }
        return <></>;
      });
    }
    return Array;
  };
  return (
    <div>
      {Object.keys(TypeCheck).map((item, ind) => {
        return (
          <React.Fragment>
            <h2>{item.toUpperCase()}</h2>
            <div key={ind} className="favorites">
              {handleFavorites(item as Check)}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Favorite;
