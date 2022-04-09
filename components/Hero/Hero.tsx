import { useEffect, useState } from "react";
import styled from "styled-components";

interface HeroProps {
  content: any[];
}

const Hero = ({ content }: HeroProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {}, [index]);

  const moveLeft = () => {
    setIndex((index + content.length - 1) % content.length);
  };

  const moveRight = () => {
    setIndex((index + 1) % content.length);
  };

  const findNextContentIndex = (direction: "left" | "right") => {
    return direction === "left"
      ? (index + content.length - 1) % content.length
      : (index + 1) % content.length;
  };

  return (
    <StyledHero className="hero">
      <div className="hero-content__center">{content[index]}</div>
      <div className="hero-content__left">
        {content[findNextContentIndex("left")]}
      </div>
      <div className="hero-content__right">
        {content[findNextContentIndex("right")]}
      </div>
      <button onClick={moveLeft}>{"<"}</button>
      <button onClick={moveRight}>{">"}</button>
    </StyledHero>
  );
};

const StyledHero = styled.article`
  width: 100%;
  height: 500px;
  background-color: deeppink;
  padding: 50px;
  display: flex;
  & > div {
    background-color: deepskyblue;
    width: 100%;
    height: 100%;
  }
`;

export default Hero;
