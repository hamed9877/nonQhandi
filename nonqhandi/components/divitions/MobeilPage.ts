import styled from "styled-components";

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 1rem;
  & > a {
    margin-bottom: 4rem;
    margin-top: 6rem;
  }

  @media screen and (min-width: 640px) {
    height: 100vh;
    overflow: hidden;
    background: url("./images/background.svg") no-repeat;
    background-size: 104%;
    background-position-y: -4rem;
    object-fit: cover;
    padding: 0;

    align-items: flex-start;
    & a {
      display: none;
    }
  }
`;
