import React, { useRef } from "react";
import Select from "../Select";
import Image from "./Image";
const Demo = props => {
  return (
    <>
      <div
        className={`Demo `}
        // 设置 位置
      >
        <Image src="https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60f.svg" />
        <Image src="https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60f.svg" />
        <Image src="https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60f.svg" />
        <Image src="https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60f.svg" />
        <Image src="https://gold-cdn.xitu.io/asset/twemoji/2.6.0/svg/1f60f.svg" />
        <Image src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />

        <Select />
      </div>
    </>
  );
};

export default Demo;
