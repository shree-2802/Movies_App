import { SetStateAction } from "react";
import { TypeCheck, userAnalysis1 } from "../Constants/Constants";
export interface InputType {
  userType: string;
  handlePage: any;
}
export type Check = keyof typeof TypeCheck;
export type Item = {
  name?: string;
  id?: string;
  link?: string;
  description?: string;
};
export type s = {
  id: number;
  like: object | null;
};
export interface Typing {
  foundBox: s | any;
  ind: number | any;
  term: string | any;
  setFoundBox: Function;
}
export interface InputStream {
  usertype: string;
  userId?: number | any;
}

export type favorite = {
  userId: number | undefined;
};
export type ItemWithLink = {
  id: string;
  name: string;
  link: string;
  description: string;
};
export type LikeCategories<Partials> = Partial<Partials>;

export type userAnalysisItem = {
  id: number;
  like: LikeCategories<{
    action: number[];
    adventure: number[];
    comedy: number[];
    drama: number[];
    fantasy: number[];
    horror: number[];
    musicals: number[];
    romance: number[];
    mystery: number[];
    sciencefiction: number[];
    sports: number[];
    thriller: number[];
  }>[];
};

export type LikeUpdateType={
  like:userAnalysisItem[]|null,
  setLikeUpdate:React.Dispatch<SetStateAction<userAnalysisItem[]|null>>
}
export interface buttonProps {
  content: string;
}
export interface Props {
  page: string;
  Array: Object | any;
  handleSubmit: Function | any;
  handlePage?: object | any;
  admin?: boolean | any;
}
export interface Componen {
  page: string;
  userType: string;
  userId?: number;
}
