import React, { useRef } from "react";
import "./index.less";

const Modal = props => {
  const { rect } = props;
  const modal = useRef();

  return (
    <>
      <div
        ref={modal}
        className={`modal ${props.show ? "is-show" : ""}`}
        // 设置 位置
        style={{ top: rect.top + "px", right: rect.right + "px" }}
      >
        this is modal
      </div>
    </>
  );
};

export default Modal;
