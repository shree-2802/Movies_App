import React, { ChangeEvent, useEffect, useState } from "react";
import "./Form.scss";
import { off } from "process";
interface Props {
  page: string;
  Array: Object | any;
  handleSubmit: Function | any;
  handlePage?: object | any;
  admin?: boolean | any;
}
const Form: React.FC<Props> = ({
  Array,
  handleSubmit,
  page,
  handlePage,
  admin,
}) => {
  const [mail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (change: string, e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (change === "email") setEmail(e.target.value);
    else if (change === "password") setPassword(e.target.value);
  };
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [page]);
  return (
    <form className="form" onSubmit={(e) => handleSubmit(e, mail, password)}>
      {Array.map((item: any) => {
        return (
          <input
            spellCheck="false"
            type={item.type}
            placeholder={item.placeholder}
            onChange={(e) => {
              handleChange(item.type, e);
            }}
            required
            value={item.type === "email" ? mail : password}
          />
        );
      })}
      <div className="clickables">
        {page === "signIn" && !admin ? (
          <p onClick={handlePage}>SignUp</p>
        ) : (
          <></>
        )}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
