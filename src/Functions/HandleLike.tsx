import { IoIosStar, FaRegStar } from "../Assets/index";
import React from "react";
type s = {
  id: number;
  like: object | any;
};
interface Typing {
  foundBox: s | any;
  ind: number | any;
  term: string | any;
  setFoundBox: Function;
}

export const HandleLike: React.FC<Typing> = ({
  foundBox,
  ind,
  term,
  setFoundBox,
}: Typing) => {
  const handleCheck = (present: boolean, index: number) => {
    let updatedLikes;
    if (present) {
      updatedLikes = foundBox.like[term].filter(
        (item: number) => item !== index
      );
    } else {
      updatedLikes = [...(foundBox.like[term] || []), index];
    }
    setFoundBox({
      ...foundBox,
      like: {
        ...foundBox.like,
        [term]: updatedLikes,
      },
    });
  };

  const isLiked = foundBox.like[term]
    ? foundBox.like[term].indexOf(ind) !== -1
    : false;

  return isLiked ? (
    <IoIosStar onClick={() => handleCheck(true, ind)} />
  ) : (
    <FaRegStar onClick={() => handleCheck(false, ind)} />
  );
};
export default HandleLike;
