import styled from "styled-components";

export const Ul = styled.ul<{ isOpen: boolean; active?: number }>`
  margin-top: 2rem;

  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  width: 100%;

  span {
    white-space: nowrap;
    display: block;
    transition: all 0.3s ease-in-out;
    margin-right: ${({ isOpen }) => (isOpen ? ".5rem" : "0")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    width: ${({ isOpen }) => (isOpen ? "10rem" : "0")};
  }
  @media screen and (max-width: 640px) {
    margin: 0;
    flex-direction: row;
  }
`;
