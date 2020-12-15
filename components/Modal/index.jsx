import React, { useState } from "react";
import "./index.less";
const SlideFloat = props => {
  const { rect } = props;
  return (
    <>
      <div
        className={`modal ${props.show ? "is-show" : ""}`}
        style={{ top: rect.top + "px", right: rect.right + "px" }}
      >
        this is modal
      </div>
    </>
  );
};

export default SlideFloat;
