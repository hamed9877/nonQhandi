import styled from "styled-components";
import { Color } from "../../styles/global/Color";

export const AddCardInput = styled.input`
  width: 100%;
  padding: 0.5rem 1.5rem;
  background-color: transparent;
  border: none;
  border-bottom-color: currentcolor;
  border-bottom-style: none;
  border-bottom-width: medium;
  border-bottom: 0.0625rem solid ${Color.grayDark};
  &:focus {
    outline: 0;
    border-bottom: 0.0625rem solid ${Color.Primary};
  }
`;
