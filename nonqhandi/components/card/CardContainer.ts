import styled, { keyframes } from "styled-components";
import { Color } from "./../../styles/global/Color";

interface IProps {
  small?: string;
  raduis?: string;
  overFlow?: string;
  border?: string;
  shadow?: string;
  margin?: string;
  direction?: string;
  padding?: string;
  width?: string;
  height?: string;
  bg?: string;
  justify?: string;
  align?: string;
  top?: string;
  maxwidth?: string;
  IsBRight?: string;
  index?: number;
}

const pushIn = keyframes`
  0% {
    transform:translateY(-3rem);
    opacity:0
  }
  100% {
    transform:translateY(0);
    opacity:1
  }
`;
export const CardContainer = styled.div<IProps>`
  flex: ${({ maxwidth }) => maxwidth || "0 0 24%"};
  display: flex;
  justify-content: flex-start;
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: ${({ align }) => align || "flex-start"};

  border-radius: 0.5rem;
  box-shadow: ${({ shadow }) => shadow || "0px 0px 14px #08080817"};

  height: ${({ height }) => height || "100%"};
  min-height: ${({ small }) => (small ? "80%" : "unset")};
  width: ${({ width }) => width || "100%"};

  position: relative;
  top: ${({ small, top }) => (small ? "-30%" : top || "0")};

  margin: ${({ margin }) => margin || ".75rem 0"};
  margin-top: 0.25rem;
  padding: ${({ padding }) => padding || "0"};

  /* background-color: ${({ bg }) => bg || `${Color.white}`}; */
  /* background-color: ${({ bg }) => bg || `${Color.white}`}; */

  transform: translateY(-3rem);
  opacity: 0;
  animation: ${pushIn} 0.5s ${({ index }) => index * 0.3}s forwards;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
