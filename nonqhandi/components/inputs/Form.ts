import styled from "styled-components";
import { Button } from "../buttons/Button";

interface IProps {
  direction?: string;
  margin?: string;
  width?: string;
  algin?: string;
}

export const Form = styled.form<IProps>`
  position: relative;

  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ algin }) => algin || "flex-start"};

  width: ${({ width }) => width || "100%"};

  margin: ${({ margin }) => margin || ".5rem 0 0 0"};
`;

const SearchBtn = styled(Button)`
  position: absolute;
  left: 0;
  &:hover {
    background-color: transparent;
  }
`;
