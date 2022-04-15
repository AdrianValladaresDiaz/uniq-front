import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import mediaBreackPoints from "../../styles/mediaBreakPoints";
import { HeroButton, StyledHero } from "./styles";

interface HeroProps {
  content: ReactNode[];
  slideDuration: number;
}

const Hero = ({ content, slideDuration }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const moveLeft = () => {
    leftRef.current?.classList.add("hero-content__left--centered");
    setTimeout(() => {
      leftRef.current?.classList.remove("hero-content__left--centered");
      setIndex((index + content.length - 1) % content.length);
    }, slideDuration);
  };

  const moveRight = () => {
    rightRef.current?.classList.add("hero-content__right--centered");
    setTimeout(() => {
      rightRef.current?.classList.remove("hero-content__right--centered");
      setIndex((index + 1) % content.length);
    }, slideDuration);
  };

  const findNextContentIndex = (direction: "left" | "right") => {
    return direction === "left"
      ? (index + content.length - 1) % content.length
      : (index + 1) % content.length;
  };

  return (
    <StyledHero className="hero" slideDuration={`${slideDuration}ms`}>
      <div className="hero-content">
        <div className="hero-content__center" ref={centerRef}>
          {content[index]}
        </div>
        <div className="hero-content__left" ref={leftRef}>
          {content[findNextContentIndex("left")]}
        </div>
        <div className="hero-content__right" ref={rightRef}>
          {content[findNextContentIndex("right")]}
        </div>
        <HeroButton onClick={moveLeft} title="move hero left" edge="left">
          {"<"}
        </HeroButton>
        <HeroButton onClick={moveRight} title="move hero right" edge="right">
          {">"}
        </HeroButton>
      </div>
    </StyledHero>
  );
};

export default Hero;
