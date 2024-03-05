import styled from "styled-components";
interface IProps {
  aling?: string;
  fs?: string;
  color?: string;
  margin?: string;
  bg?: string;
  padding?: string;
}
export const P = styled.p<IProps>`
  width: 100%;
  font-size: ${({ fs }) => fs || "16px"};
  font-weight: 600;
  text-align: ${({ aling }) => aling || "right"};
  color: ${({ color }) => color || "#000"};
  margin: ${({ margin }) => margin || "0"};
  background-color: ${({ bg }) => bg || "transparent"};
  padding: ${({ padding }) => padding || ""};
`;
