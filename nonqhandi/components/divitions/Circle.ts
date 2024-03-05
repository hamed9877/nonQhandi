import styled from "styled-components";
import { Color } from "./../../styles/global/Color";

interface IProps {
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  position?: string;
}
export const Circle = styled.div<IProps>`
  position: ${({ position }) => position || "relative"};
  top: ${({ top }) => top || "0"};
  right: ${({ right }) => right || "0"};
  height: ${({ height }) => height || "3.5rem"};
  width: ${({ width }) => width || "3.5rem"};
  border-radius: 50%;
  border: 2px solid ${Color.white};
  background-color: ${Color.white};
  /* box-shadow: 0 0.1875rem 0.1875rem 0.0625rem ${Color.shadow}; */
`;
