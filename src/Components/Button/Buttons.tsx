import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";
interface buttonProps {
  content: string;
}
const Buttons: React.FC<buttonProps> = ({ content }) => {
  const navigate = useNavigate();
  const handleChange = (page: string) => {
    if (page === "user") {
      navigate("/user");
    } else navigate("/admin");
  };
  return (
    <div>
      <button className="btn-log" onClick={() => handleChange(content)}>
        Login as {content.toLocaleUpperCase()}
      </button>
    </div>
  );
};

export default Buttons;
