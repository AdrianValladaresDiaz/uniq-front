import { useEffect, useState } from "react";
import styled from "styled-components";

interface HeroProps {
  content: any[];
}

const Hero = ({ content }: HeroProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log(index);
  }, [index]);

  const moveLeft = () => {
    setIndex((index + content.length - 1) % content.length);
  };

  const moveRight = () => {
    setIndex((index + 1) % content.length);
  };

  return (
    <StyledHero className="hero">
      <div className="hero-content__center"></div>
      <div className="hero-content__left"></div>
      <div className="hero-content__right"></div>
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
