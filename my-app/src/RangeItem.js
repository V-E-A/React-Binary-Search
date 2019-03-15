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

    let color = "#e1696982";
    let pulsing = false;

    if (num === objective && found) {
      color = "#e1697e";
      pulsing = true;
    }

    if (num === searchedArray[pivot] && !found) {
      color = "#69c0e1";
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
      // font-size: 2.5vmin;
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      padding-bottom: 1%;
      z-index: 1;
      @media only screen and (min-width: 220px) and (max-width: 319px) {
        font-size: 0.4rem;
      }
      @media only screen and (min-width: 320px) and (max-width: 481px) {
        font-size: 0.6rem;
      }
      @media only screen and (min-width: 480px) and (max-width: 600px) {
        font-size: 0.9rem;
      }
      @media only screen and (min-width: 601px) and (max-width: 780px) {
        font-size: 1rem;
      }
      @media only screen and (min-width: 781px) and (max-width: 960px) {
        font-size: 1.2rem;
      }
      @media only screen and (min-width: 961px) and (max-width: 1200px) {
        font-size: 1.5rem;
      }
      @media only screen and (min-width: 1201px) and (max-width: 1500px) {
        font-size: 1.7rem;
      }
      @media only screen and (min-width: 1501px) and (max-width: 2000px) {
        font-size: 2rem;
      }
      @media only screen and (min-width: 2001px) {
        font-size: 2.4rem;
      }
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
      @media only screen (min-width: 320px) and (orientation: portrait) {
        font-size: 1.2rem;
      }
      @media only screen and (min-width: 480px) and (max-width: 600px) {
        font-size: 1.7rem;
      }
      @media only screen and (min-width: 601px) and (max-width: 780px) {
        font-size: 2.2rem;
      }
      @media only screen and (min-width: 781px) and (max-width: 960px) {
        font-size: 2.7rem;
      }
      @media only screen and (min-width: 961px) and (max-width: 1200px) {
        font-size: 3.6rem;
      }
      @media only screen and (min-width: 1201px) and (max-width: 1500px) {
        font-size: 4.6rem;
      }
      @media only screen and (min-width: 1501px) and (max-width: 2000px) {
        font-size: 5.4rem;
      }
      @media only screen and (min-width: 2001px) {
        font-size: 6.6rem;
      }
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
