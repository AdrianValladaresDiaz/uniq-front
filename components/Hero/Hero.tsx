import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface HeroProps {
  content: ReactNode[];
}

const Hero = ({ content }: HeroProps) => {
  const [index, setIndex] = useState(0);
  const centerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, [index]);

  const moveLeft = () => {
    leftRef.current?.classList.add("hero-content__left--centered");
    setTimeout(() => {
      leftRef.current?.classList.remove("hero-content__left--centered");
      setIndex((index + content.length - 1) % content.length);
    }, 1500);
  };

  const moveRight = () => {
    rightRef.current?.classList.add("hero-content__right--centered");
    setTimeout(() => {
      rightRef.current?.classList.remove("hero-content__right--centered");
      setIndex((index + 1) % content.length);
    }, 1500);
  };

  const findNextContentIndex = (direction: "left" | "right") => {
    return direction === "left"
      ? (index + content.length - 1) % content.length
      : (index + 1) % content.length;
  };

  return (
    <StyledHero className="hero">
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
      </div>
      <button onClick={moveLeft} title="move hero left">
        {"<"}
      </button>
      <button onClick={moveRight} title="move hero right">
        {">"}
      </button>
    </StyledHero>
  );
};

const StyledHero = styled.article`
  width: 100%;
  background-color: deeppink;
  padding: 50px;
  display: flex;
  & > .hero-content {
    background-color: deepskyblue;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    position: relative;
    & > * {
      width: 100%;
      flex: 1 0 auto;
      border: 2px solid black;
      position: absolute;
      &.hero-content {
        height: auto;
        &__center {
          position: relative;
        }
        &__left {
          transform: translateX(-100%);
          &--centered {
            transition: all 1s linear;
            transform: translateX(0);
          }
        }
        &__right {
          transform: translateX(100%);
          &--centered {
            transition: all 1s linear;
            transform: translateX(0);
          }
        }
      }
    }
  }
`;

export default Hero;
