import styled from "styled-components";
import { Color } from "./../../styles/global/Color";

export const WebNav = styled.nav<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "16rem" : "6rem")};
  transition: width 0.3s ease-in-out;
  position: relative;
  height: 100%;
  padding: 1rem;
  padding-top: 2rem;
  background-color: ${Color.white};
  box-shadow: -1px 0px 14px #08080817;

  &:hover > svg {
    fill: ${Color.gray50};
  }

  @media screen and (max-width: 640px) {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    box-shadow: 0 -4px 10px #08080817;
    padding: 0.5rem;
  }
`;
