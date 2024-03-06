import styled from "styled-components";

interface IProps {
  width?: string;
}
export const LabelWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 14px;
  gap: 0.25rem;
  svg {
    font-size: 24px;
  }
`;
