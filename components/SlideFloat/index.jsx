import React, { useState } from "react";
import "./index.less";
const SlideFloat = () => {
  const [toggleShow, setToggleShow] = useState(false);
  const handleClick = () => {
    console.log("click");
    setToggleShow(!toggleShow);
  };
  return (
    <>
      <div className="float-wrapper">
        <div className="float" onClick={handleClick}>
          点我
        </div>
        <div className={`modal ${toggleShow ? "is-show" : ""}`}>
          this is modal
        </div>
      </div>
    </>
  );
};

export default SlideFloat;
