import React, { Component } from "react";
import Range from "./Range";
import NumInput from "./NumInput";
import Message from "./Message";
import styled from "@emotion/styled/macro";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedArray: [11, 25, 33, 48, 49, 50, 69, 71, 88, 90, 110],
      found: null,
      start: 0,
      end: 10,
      objective: null,
      pivot: null,
      message: null
    };
  }

  clickHandler = val => {
    this.searchHandler(val);
  };

  searchHandler = obj => {
    let { searchedArray, objective, pivot, start, end } = this.state;
    objective = obj;
    this.setState({ objective: obj });

    if (start <= end) {
      pivot = Math.floor((start + end) / 2);
      this.setState({
        pivot: pivot
      });

      if (searchedArray[pivot] === objective) return this.foundHandler(pivot);
      else if (this.state.searchedArray[pivot] < objective) {
        start = pivot + 1;
        this.setState({
          start: start
        });
      } else {
        end = pivot - 1;
        this.setState({
          end: end
        });
      }
    } else {
      return this.notFoundHandler();
    }
  };

  foundHandler = pivot => {
    this.setState({ found: true, message: `FOUND IT! AT INDEX ${pivot}` });
  };

  notFoundHandler = () => {
    this.setState({ found: false, message: "SORRY, NOT HERE.." });
  };

  render() {
    return (
      <Wrap>
        <NumInput
          onClick={this.clickHandler}
          searchedArray={this.state.searchedArray}
        />
        <Range props={this.state} />
        <Message message={this.state.message} />
      </Wrap>
    );
  }
}

export default App;

const Wrap = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;
  padding: 5%;
  background: linear-gradient(
    to bottom,
    rgba(255, 186, 186, 0.52) 0%,
    rgba(255, 255, 255, 1) 41%,
    rgba(255, 255, 255, 1) 100%
  );
`;
