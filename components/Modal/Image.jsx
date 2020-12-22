import React, { useState } from "react";

const Image = props => {
  const [src, setSrc] = useState(props.src);
  const handleClick = () => {
    setSrc()
  };
  return (
    <>
      <img className={`demo-image`} src={src} onClick={handleClick} />
    </>
  );
};

export default Image;
