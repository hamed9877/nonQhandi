import styled from "styled-components";
import { Color } from "../../styles/global/Color";

interface IProps {
  direction?: string;
  width?: string;
}

export const CardWarrper = styled.div<IProps>`
  width: ${({ width }) => width || "100%"};

  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction || "row"};
  gap: 0.5rem;

  padding: 0.5rem;
  font-size: 1.25rem;
  color: ${Color.gray50};

  /* justify-content: space-between; */
`;
