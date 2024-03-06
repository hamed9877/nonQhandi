import React from "react";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Shadow } from "../../styles/global/Shadow";
import LogoBar from "../LogoBar";
import { Button } from "../buttons/Button";

interface INav {
  active?: number;
}

export const GuestNav: React.FC<INav> = ({ active }) => {
  const list = [
    "درباره ی همدان",
    "جاذبه های گردشگری",
    "طرح های گردشگری",
    "اخبار",
    "تماس با ما",
    "درباره ما",
  ];
  return (
    <Navbar>
      <UlList>
        <LogoBar />
        {list.map((data) => (
          <Li>{data}</Li>
        ))}
      </UlList>
      <ButtonWrapper>
        <Button
          bg={Color.Primary}
          radius=".5rem"
          padding=".25rem 2rem"
          hoverColor={Color.secondary}
          fs="white"
        >
          <a href="/login">ورود</a>
        </Button>
      </ButtonWrapper>
    </Navbar>
  );
};
const UlList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  height: 100%;
  list-style-type: none;
`;
const Li = styled.li`
  font-size: 0.825rem;
  color: ${Color.grayDark};
  font-weight: 700;
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  background-color: ${Color.white};
  box-shadow: ${Shadow.cardShadow};
  height: 4rem;
  width: 100vw;
  z-index: 9999;
  top: 0;
  position: absolute;
  @media screen and (max-width: 640px) {
    padding: 0.5rem 1rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  & * button {
    margin: 0.25rem 0.5rem;
  }
  svg {
    display: none;
    font-size: 32px;
    color: ${Color.Primary};
  }
  /* @media screen and (max-width: 640px) {
    button {
      display: none;
    }
    svg {
      display: block;
    }
  } */
`;
