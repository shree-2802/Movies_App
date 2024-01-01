import React from "react";
import { userAnalysis1, TypeCheck } from "../../../Constants/Constants";
import "./Favorites.scss";
type favorite = {
  userId: number | undefined;
};
type ItemWithLink = {
  id: string;
  name: string;
  link: string;
  description: string;
};
type s = keyof typeof userAnalysis1;
type check = keyof typeof TypeCheck;
const Favorite = ({ userId }: favorite) => {
  let val: s | any = userAnalysis1.find((item) => item.id === userId);
  console.log(val, "  val");
  const handleFavorites = (item: check) => {
    let Array: any = [];
    if (val?.like[item]) {
      val?.like[item].map((ind: number) => {
        if (TypeCheck[item][ind] && "link" in TypeCheck[item][ind]) {
          const currentLink = TypeCheck[item][ind] as ItemWithLink;
          Array.push(
            <div key={ind}>
              <img src={currentLink.link} />
              <p>{currentLink.name}</p>
            </div>
          );
        }
      });
    }
    console.log(Array);
    return Array;
  };
  return (
    <div>
      {Object.keys(TypeCheck).map((item, ind) => {
        return (
          <React.Fragment>
            <h2>{item.toUpperCase()}</h2>
            <div key={ind} className="favorites">
              {handleFavorites(item as check)}
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Favorite;
