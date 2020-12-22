import React, { useState } from "react";
const GIF1 = require("./gif1.gif");
const Image = props => {
  const [src, setSrc] = useState(props.src);
  const handleClick = () => {
    setSrc(GIF1);
  };
  return (
    <>
      <img className={`demo-image`} src={src} onClick={handleClick} />
    </>
  );
};

export default Image;
