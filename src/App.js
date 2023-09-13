import React, { useState } from "react";
import { styled } from "styled-components";
import "./App.css";
import Heading from "./components/Heading";
import Bubble from "./components/Bubble";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(155, 184, 155);
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
`;

const PanelTop = styled.div`
  padding: 0px 30%;
  width: 100%;
  height: 100px;
  background-color: rgb(72, 104, 72);
  color: #fff;
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: relative;
`;

const StartBtn = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #ffff;
  color: #000;
  font-weight: 700;
  position: absolute;
  right: 10px;
  align-self: center;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
  }
`;

const PanelBottom = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  padding: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const EndGame = styled.div`
  font-size: 30px;
`;

const App = () => {
  let [time, setTime] = useState(60);
  const [bub, setbub] = useState([]);
  const [hitValue, setHitValue] = useState(0);
  let [scorevalue, setScoreValue] = useState(0);

  const increaseScore = () => {
    setScoreValue((scorevalue = +10));
  };

  const getNewHit = () => {
    setHitValue(Math.floor(Math.random() * 10));
  };

  const runTimer = () => {
    var timerint = setInterval(() => {
      if (time >= 0) {
        setTime(time--);
      } else {
        clearInterval(timerint);
      }
    }, 1000);
  };

  const makeBubble = () => {
    let clutter = [];
    for (var i = 1; i <= 102; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter.push(rn);
    }
    setbub(clutter);
  };

  const handleStart = async () => {
    makeBubble();
    runTimer();
    getNewHit();
  };

  const handleGame = (e) => {
    let clickedNumber = Number(e.target.textContent);

    if (clickedNumber === hitValue) {
      increaseScore();
      makeBubble();
      getNewHit();
    }
  };

  return (
    <Container>
      <Wrapper>
        <PanelTop>
          <Heading head={"Hit"} value={hitValue} />
          <Heading head={"time"} value={time} />
          <Heading head={"Score"} value={scorevalue} />
          <StartBtn onClick={handleStart} disabled={time < 60 && time > 0}>
            Start
          </StartBtn>
        </PanelTop>
        <PanelBottom onClick={handleGame}>
          {time > 0 ? (
            bub.map((item, index) => <Bubble key={index} bValue={item} />)
          ) : (
            <EndGame>Game Over</EndGame>
          )}
        </PanelBottom>
      </Wrapper>
    </Container>
  );
};

export default App;
