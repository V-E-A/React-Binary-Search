import React, { Component } from "react";
import styled from "@emotion/styled/macro";

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "FIND THE ONE"
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.message !== null) {
      return { message: props.message };
    } else {
      return null;
    }
  }

  render() {
    return <Wrap>{this.state.message}</Wrap>;
  }
}

const Wrap = styled.div`
  color: #de4e68;
  font-size: calc(18px + 0.25vw);
  margin-top: 7%;
`;
