import styled from "styled-components";
import { Color } from "./../../styles/global/Color";

interface IProps {
  raduis?: string;
  width?: string;
  padding?: string;
  bg?: string;
}

export const Input = styled.input<IProps>`
  border-radius: ${({ raduis }) => raduis || ".5rem"};
  border: 1px solid ${Color.grayLight};
  text-align: right;
  padding: ${({ padding }) => padding || "0.5rem"};
  background-color: ${({ bg }) => bg || Color.background};
  color: ${Color.grayDark};
  width: 100%;
  &:focus {
    outline: none;
  }
`;
