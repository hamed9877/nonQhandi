import styled from "styled-components";
import { Color } from "../../styles/global/Color";

export const RadioInput = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;

  &:focus + label {
    background-color: ${Color.Primary};
    border: none;
    color: ${Color.white};
  }
`;
