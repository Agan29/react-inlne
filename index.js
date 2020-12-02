import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Select from "./Select";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
// import "./index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div>
          <Select />
          <Hello name={this.state.name} />
          <p>Start editing to see some magic happen :)</p>
        </div>
      </ConfigProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
