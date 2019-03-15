import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import RangeItem from "./RangeItem";

export default class Range extends Component {
  render() {
    const {
      searchedArray,
      found,
      start,
      end,
      objective,
      pivot
    } = this.props.props;

    const arrayItems = searchedArray.map((num, i) => (
      <RangeItem
        key={i}
        searchedArray={searchedArray}
        num={num}
        pivot={pivot}
        found={found}
        objective={objective}
        dimmed={
          num !== searchedArray[pivot] && (i < start || i > end)
            ? "true"
            : "false"
        }
      />
    ));

    return (
      <Wrap>
        <Arr>{arrayItems}</Arr>
      </Wrap>
    );
  }
}

const Arr = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3%;
  width: 90%;
`;

const Wrap = styled.div`
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  width: 100%;
`;
