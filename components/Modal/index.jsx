import React, { useRef } from "react";
import Demo from "./Demo";
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
        <div className="modal-body">
          <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          <Demo />
        </div>
      </div>
    </>
  );
};

export default Modal;
