import React, { useEffect, useState } from "react";
import { userAnalysis1 } from "../../../Constants/Constants";
import { TypeCheck } from "../../../Constants/Constants";
import HandleLike from "../../../Functions/HandleLike";
// import {}
import "./Genre.scss";
type Check = keyof typeof TypeCheck;
type Item = {
  name?: string;
  id?: string;
  link?: string;
  description?: string;
};
interface InputStream {
  usertype: string;
  userId?: number | any;
}
type s = {
  id: number;
  like: object | any;
};

const Genre: React.FC<InputStream> = ({ usertype, userId }) => {
  let val: s | any = userAnalysis1.find((item) => item.id === userId);
  const [foundBox, setFoundBox] = useState<s>(val);
  const VideoBox = (term: Check) => {
    const Arr: any = [];
    TypeCheck[term].forEach((item: Item, ind) => {
      if (item.link) {
        Arr.push(
          <div key={ind} className="video1">
            <img src={item.link} />
            <p className="name">{item.name}</p>
            {usertype === "user" ? (
              <div className="icon">
                <HandleLike
                  foundBox={foundBox}
                  ind={ind}
                  term={term}
                  setFoundBox={setFoundBox}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        );
      } else {
        Arr.push(
          <p key={ind} style={{ fontSize: "22px" }}>
            Currently unavailable
          </p>
        );
      }
    });
    return Arr;
  };

  return (
    <div className="genre">
      {Object.keys(TypeCheck).map((item, ind) => {
        return (
          <div key={ind}>
            <h2>{item.toLocaleUpperCase()}</h2>
            <div className="videoBanner">{VideoBox(item as Check)}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Genre;
