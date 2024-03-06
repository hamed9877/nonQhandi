import styled from "styled-components";

interface IProps {
  IsVisibilityBack?: boolean;
}
export const BackBtn = styled.a<IProps>`
  position: absolute;
  z-index: 10;
  top: 0.5rem;
  left: 0.5rem;
  flex: 1;
  display: flex;
  justify-content: end;
`;
