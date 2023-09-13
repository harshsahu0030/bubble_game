import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgb(72, 104, 72);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    background-color: rgb(50, 75, 50);
    cursor: pointer;
  }
`;

const Bubble = ({ bValue }) => {
  return <Container>{bValue}</Container>;
};

export default Bubble;
