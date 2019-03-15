import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import withProps from "recompose/withProps";

export default class NumInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
  }

  handleChange = e => {
    this.setState({ val: parseInt(e.target.value) });
  };

  handleReset = () => {
    window.location.reload();
  };

  render() {
    return (
      <Wrap>
        <InputWrap>
          <Input value={this.state.val} onChange={this.handleChange} />
        </InputWrap>
        <ButtonWrap>
          <InputBtn
            onClick={() => {
              this.props.onClick(this.state.val);
            }}
          >
            STEP
          </InputBtn>
          <InputBtn onClick={this.handleReset}>RESET</InputBtn>
        </ButtonWrap>
      </Wrap>
    );
  }
}
const InputBtn = styled.button`
  font-family: "Amaranth", sans-serif;
  font-weight: 700;
  width: 45%;
  border: none;
  border-radius: 3px;
  color: white;
  margin-top: 10px;
  background-color: #e1697e;
  text-align: center;
  padding: 2%;
  font-size: 5vmin;
  
  &:hover {
    background-color: #de4e68;
    cursor: pointer;
  }
  outline: none;
`;

const Input = withProps({ type: "number" })(styled("input")`
  font-family: "Amaranth", sans-serif;
  font-weight: 700;
  color: white;
  background-color:#69c0e1;
  outline: none;
  border: none;
  width: 100%;
  text-align: center;
  padding: 2%;
  border-radius: 3px;
  font-size: 5vmin;
  margin-bottom:3%;

`);

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 50%;
`;
