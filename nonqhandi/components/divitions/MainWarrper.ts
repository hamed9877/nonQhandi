import styled from "styled-components";
import { LayoutSize } from "../../interface/LayoutSize";

export const MainWrapper = styled.div<LayoutSize>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  position: relative;

  background-color: ${({ bg }) => bg || "transparent"};

  height: ${({ SWrapper }) => SWrapper?.height || "100%"};
  width: ${({ SWrapper }) => SWrapper?.width || ""};

  /* max-height: 100vh; */
  /* overflow-y: auto; */
  overflow-x: hidden;

  border-radius: ${({ radius }) => radius || "0"};
  border: ${({ border }) => border || "none"};

  padding: ${({ padding }) => padding || "0.5rem"};

  overflow-y: ${({ overflow }) => overflow || "scroll"};
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
