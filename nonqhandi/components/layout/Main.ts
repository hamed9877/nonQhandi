import styled from "styled-components";
import { LayoutSize } from "../../interface/LayoutSize";
import { Color } from "../../styles/global/Color";

export const Main = styled.main<LayoutSize>`
  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: ${({ SMain }) => SMain?.justifyContent || ""};
  align-items: ${({ SMain }) => SMain?.alignItems || ""};
  height: 100%;

  padding: ${({ padding }) => padding || "0 1rem"};

  /* border: ${({ SMain }) =>
    SMain?.border || `solid 1rem ${Color.Primary}`}; */
  /* border-radius: 2rem 2rem 0 0; */
`;
