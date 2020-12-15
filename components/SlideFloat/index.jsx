import React, { Component } from "react";
import "./index.less";
class SlideFloat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="float-wrapper">
          <div className="float" onClick={this.props.onClick}>
            点我
          </div>
        </div>
      </>
    );
  }
}

export default SlideFloat;
