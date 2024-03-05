import styled from "styled-components";
interface IProps {
  bg?: string;
}

export const Page = styled.section<IProps>`
  display: flex;
  background-color: ${({ bg }) => bg || "transparent"};
  align-items: center;
  height: 100vh;
`;
