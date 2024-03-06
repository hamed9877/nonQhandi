import styled from "styled-components";
import { Color } from "./../../styles/global/Color";

export const Number = styled.span`
  display: flex;
  align-items: center;

  height: 100%;

  color: ${Color.grayDark};
  font-weight: 600;

  border-left: 2px solid ${Color.grayLight};

  padding: 1rem 0.5rem;
`;
