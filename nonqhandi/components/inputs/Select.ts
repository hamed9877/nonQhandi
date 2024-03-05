import styled from "styled-components";
import { Color } from "./../../styles/global/Color";

interface IPrps {
  raduis?: string;
  border?: string;
  shadow?: string;
  padding?: string;
  width?: string;
}
export const Select = styled.select<IPrps>`
  width: ${({ width }) => width || "80%"};

  /* box-shadow: ${({ shadow }) => shadow || "none"}; */

  /* padding: ${({ padding }) => padding || ".5rem"}; */
  margin-top: 1rem;

  /* border: ${({ border }) => border || "none"}; */
  /* border-radius: ${({ raduis }) => raduis || ".5rem"}; */

  /* background-color: ${Color.white}; */

  /* -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none; */

  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
