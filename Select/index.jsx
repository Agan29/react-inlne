
import { Form, Select, Input, Button } from "antd";
import React, { Component } from "react";

const { Option } = Select;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1"
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.setState({ id: value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    this.dynamicInput = {
      1: (
        <Form.Item label="1">
          {getFieldDecorator("note1", {
            rules: [{ required: true, message: "Please input your 1!" }]
          })(<Input />)}
        </Form.Item>
      ),
      2: (
        <Form.Item label="2">
          {getFieldDecorator("note2", {
            rules: [{ required: true, message: "Please input your 2!" }]
          })(<Input />)}
        </Form.Item>
      )
    };
    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="Gender">
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "Please select your gender!" }]
          })(
            <Select
              placeholder="Select a option and change input text above"
              onChange={this.handleSelectChange}
            >
              <Option value="1">male</Option>
              <Option value="2">female</Option>
            </Select>
          )}
        </Form.Item>
        {this.dynamicInput[this.state.id]}
        <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const SelectWrapper = Form.create({ name: "coordinated" })(App);
export default SelectWrapper;
