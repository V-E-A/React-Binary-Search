import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import "./RangeItem.css";

export default class RangeItem extends Component {
  constructor(props) {
    super(props);
    this.state = { dimmed: this.props.dimmed };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.dimmed === "true" || nextProps.dimmed === "true") {
      return { dimmed: "true" };
    } else {
      return null;
    }
  }

  render() {
    const { searchedArray, objective, pivot, num, found } = this.props;

    let color = "pink";
    let pulsing = false;

    if (num === objective && found) {
      color = "#e1697e";
      pulsing = true;
    }

    if (num === searchedArray[pivot] && !found) {
      color = "#c0daff";
    }

    if (this.state.dimmed === "true") {
      color = "#df9aa642";
    }

    const Item = styled.div`
      color: white;
      background: transparent;
      border-radius: 50%;
      text-align: center;
      width: 5vw;
      height: 5vw;
      font-size: 2.5vmin;
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      padding-bottom: 0.5%;
      z-index: 1;
    `;

    const Heart = styled.div`
      color: ${color};
      background: transparent;
      border-radius: 50%;
      text-align: center;
      width: 5vw;
      height: 5vw;
      font-size: 6vmin;
      justify-content: center;
      align-items: center;
      display: flex;
    `;

    return (
      <div>
        <Item>{this.props.num}</Item>
        <Heart id={pulsing ? "pulse" : "none"}>
          <i className="fas fa-heart " />
        </Heart>
      </div>
    );
  }
}
