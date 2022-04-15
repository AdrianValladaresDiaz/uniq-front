import styled from "styled-components";
import mediaBreackPoints from "../../styles/mediaBreakPoints";

interface StyledHeroProps {
  slideDuration?: string;
}

export const StyledHero = styled.article<StyledHeroProps>`
  width: 100%;
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
            transition: all ${(props) => props.slideDuration} linear;
            transform: translateX(0);
          }
        }
        &__right {
          transform: translateX(100%);
          &--centered {
            transition: all ${(props) => props.slideDuration} linear;
            transform: translateX(0);
          }
        }
      }
    }
  }
  @media (min-width: ${mediaBreackPoints.tablet}) {
    padding: 50px;
  }
`;

interface HeroButtonProps {
  edge?: "left" | "right";
}

export const HeroButton = styled.button<HeroButtonProps>`
  position: absolute;
  ${(props) => props.edge}: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: min-content;
  border: none;
  border-radius: ${(props) =>
    props.edge === "left" ? "0 50% 50% 0" : "50% 0 0 50%"};
  background-color: ${(p) => p.theme.backgroundColor};
  font-size: 1.5rem;
`;
