import { IoIosStar, FaRegStar } from "../Assets/index";
import React, { useContext, useEffect } from "react";
import { LikeContext } from "../Pages/Admin/AdminHome";
import { userAnalysis1 } from "../Constants/Constants";
import { Typing } from "../Types/Types";
export const HandleLike: React.FC<Typing> = ({
  foundBox,
  ind,
  term,
  setFoundBox,
}) => {
  const setUpdate = useContext(LikeContext);
  const handleCheck = (present: boolean, index: number) => {
    let updatedLikes: any;
    if (present) {
      updatedLikes = foundBox.like[0][term].filter(
        (item: number) => item !== index
      );
    } else {
      updatedLikes = [...(foundBox.like[0][term] || []), index];
    }
    setFoundBox((prevFoundBox: any) => ({
      ...foundBox,
      like: [
        {
          ...foundBox.like[0],
          [term]: updatedLikes,
        },
        ...prevFoundBox.like.slice(1),
      ],
    }));
  };
  useEffect(() => {
    setUpdate?.setLikeUpdate(userAnalysis1.slice(ind, foundBox));
  }, [foundBox]);

  const isLiked = foundBox.like[0][term]
    ? foundBox.like[0][term].indexOf(ind) !== -1
    : false;

  return isLiked ? (
    <IoIosStar onClick={() => handleCheck(true, ind)} />
  ) : (
    <FaRegStar onClick={() => handleCheck(false, ind)} />
  );
};
export default HandleLike;
