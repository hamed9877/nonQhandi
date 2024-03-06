import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { IProps } from "../IProps";
export const Span = styled.span<IProps>`
  color: ${(props) => props.color || Color.Primary};
  padding: 0 0.5rem 0 0;
`;
