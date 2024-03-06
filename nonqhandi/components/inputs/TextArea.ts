import styled from "styled-components";
import { Color } from "../../styles/global/Color";

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  min-height: 10rem;

  padding: 0.5rem;
  margin: 0.5rem 0;

  border: solid 0.0625rem ${Color.secondary};
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }
`;
