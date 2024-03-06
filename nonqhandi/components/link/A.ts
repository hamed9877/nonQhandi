import styled from "styled-components";
import { Animtion } from "./../../styles/global/Animation";
import { Color } from "./../../styles/global/Color";

interface IProps {
  width?: string;
  padding?: string;
  margin?: string;
  raduis?: string;
  bg?: string;
  fs?: string;
  hoverColor?: string;
  color?: string;
  justify?: string;
  bgHover?: string;
  alignSelf?: string;
}

export const A = styled.a<IProps>`
  display: flex !important;
  align-items: center;
  justify-content: ${({ justify }) => justify || "right"};
  align-self: ${({ alignSelf }) => alignSelf || ""};
  flex-direction: row;

  color: ${({ color }) => color || Color.white};
  font-size: ${({ fs }) => fs || "1rem"};

  width: ${({ width }) => width || "100%"};

  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || "0.5rem 0.5rem 0.5rem 0"};
  background-color: ${({ bg }) => bg || "transparent"};
  border-radius: ${({ raduis }) => raduis || "0"};
  border: none;

  z-index: 1;

  &:hover {
    transition: ${Animtion.softTarnsiton};
    color: ${({ hoverColor }) => hoverColor || Color.Primary};
    background-color: ${({ bgHover }) => bgHover || Color.BtnHover};
  }
`;
