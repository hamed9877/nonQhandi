import styled from "styled-components";
import { Color } from "../styles/global/Color";

interface IProps {
  width?: string;
  fill?: string;
  margin?: string;
}

export const Svg = styled.svg<IProps>`
  display: flex;
  text-align: center;
  align-items: center;
  font-size: ${({ width }) => width || "2rem"};
  width: ${({ width }) => width || "1.5rem"};
  fill: ${({ fill }) => fill || Color.white};
  stroke: ${({ fill }) => fill || Color.white};
  margin: ${({ margin }) => margin || ".5rem"}; ;
`;
