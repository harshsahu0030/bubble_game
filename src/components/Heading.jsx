import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const PHead = styled.h2`
  font-weight: 500;
  font-size: 22px;
`;

const Box = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ffff;
  color: #000;
  font-weight: 700;
  font-size: 22px;
`;



const Heading = ({ head, value }) => {
  return (
    <Container>
      <Wrapper>
        <PHead>{head}</PHead>
        <Box>{value}</Box>
      </Wrapper>
    </Container>
  );
};

export default Heading;
