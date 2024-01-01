import React from "react";
import "./Landing.scss";
import Button from "../../Components/Button/Buttons";
function Landing() {
  const arr = ["admin", "user"];
  const list = [
    10, 4, 18, 20, 13, 1, 8, 11, 15, 2, 12, 17, 3, 14, 5, 9, 16, 7, 6, 19, 4,
    18, 20, 13, 1, 8, 11, 15, 2, 12, 17, 10, 4, 18, 20, 13, 1, 8, 11, 15, 2, 12,
    17, 3, 14, 5, 9, 16, 7, 6, 19, 4, 18, 20, 13, 1, 8, 11, 15, 2, 12, 17, 10,
    4, 18, 20, 13, 1, 8, 11, 15, 2, 12, 17, 3,
  ];

  return (
    <div className="Landing">
      <div className="buttonContent">
        {arr.map((item, ind) => {
          return <Button key={ind} content={item} />;
        })}
      </div>
      <div className="bubbles">
        {list.map((item, ind) => {
          return (
            <span
              key={ind}
              style={{
                animationDuration: `calc(125s/${item})`,
                // backgroundColor: ind % 2 === 0 ? "#ff2d75" : "#4fc3dc",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Landing;
