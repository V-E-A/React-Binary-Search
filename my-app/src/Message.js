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
  // font-size: 5vmin;
  margin: 3%;

  @media only screen and (min-width: 320px) and (max-width: 700px) {
    font-size: 5vmin;
  }
  @media only screen and (min-width: 701px) and (max-width: 1500px) {
    font-size: 6.5vmin;
  }
 
  @media only screen and (min-width: 1500px) {
    font-size: 8vmin;
  }
`;
