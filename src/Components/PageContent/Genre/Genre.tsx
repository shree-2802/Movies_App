import React, {  useState ,useContext} from "react";
import { TypeCheck } from "../../../Constants/Constants";
import { LikeContext } from "../../../Pages/Admin/AdminHome";
import { userAnalysisItem } from "../../../Types/Types";
import HandleLike from "../../../Functions/HandleLike";
// import {}
import "./Genre.scss";
import { InputStream,s,Check,Item } from "../../../Types/Types";

const Genre: React.FC<InputStream> = ({ usertype, userId }) => {
  const arraySet = useContext(LikeContext);
  console.log(arraySet," genre")
  let val: userAnalysisItem | any = [];
  if (arraySet?.like) {
    val = arraySet.like.find((item) => item.id === userId);
  }
  const [foundBox, setFoundBox] = useState<s>(val);
  const VideoBox = (term: Check) => {
    const Arr: any = [];
    TypeCheck[term].forEach((item: Item, ind) => {
      if (item.link) {
        Arr.push(
          <div key={ind} className="video1">
            <img src={item.link} alt="hi"/>
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
