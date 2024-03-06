import styled from "styled-components";
import { Color } from "../../styles/global/Color";

export const Label = styled.label`
  display: inline-block;
  text-align: center;
  font-size: 0.875rem;
  background-color: ${Color.white};

  border-radius: 0.5rem;
  border: 0.0625rem solid ${Color.secondary};

  padding: 0.125rem 2rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: ${Color.grayLight};
    cursor: pointer;
  }
`;
