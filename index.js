import React, { Component } from "react";
import { render, findDOMNode } from "react-dom";

import Hello from "./Hello";
import Select from "./components/Select";
import SlideFloat from "./components/SlideFloat";
import Modal from "./components/Modal";
// antd
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";

// common style
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      rect: {
        top: 0,
        left: 0
      },
      toggleShow: false
    };
    this.handlClick = this.handlClick.bind(this);
    this.fixedButton = React.createRef();
  }

  componentDidMount = () => {
    const fixedButton = findDOMNode(this.fixedButton.current);
    console.log({ fixedButton });
    const rect = getComputedStyle(fixedButton) || currentStyle(fixedButton);
    console.log(rect.getPropertyValue("top"));
    this.setState({
      rect: {
        top: parseFloat(rect.getPropertyValue("top")) + 16,
        left: parseFloat(rect.getPropertyValue("right"))
      }
    });
  };

  handlClick = () => {
    this.setState({ toggleShow: !this.state.toggleShow });
  };

  render() {
    const { rect, toggleShow } = this.state;
    return (
      <ConfigProvider locale={zhCN}>
        <div>
          <Select />
          <Modal rect={rect} show={toggleShow} />
          <SlideFloat onClick={this.handlClick} ref={this.fixedButton} />
          <Hello name={this.state.name} />
          <p>Start editing to see some magic happen :)</p>
        </div>
      </ConfigProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
