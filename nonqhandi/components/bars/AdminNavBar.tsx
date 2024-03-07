import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import MemoLeftChervon from "../../assets/icons/LeftChervon";
import MemoLogo from "../../public/images/Logo";
import { Color } from "../../styles/global/Color";
import { Li } from "../List/Li";
import { Ul } from "../List/Ul";
import { A } from "../link/A";
import { WebNav } from "./WebNav";

export const AdminNav: React.FC<{ data: any }> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <WebNav isOpen={isOpen}>
      <LogoWrapper>
        <Logo>
          <MemoLogo />
        </Logo>
        {isOpen && <p> سامانه پایش گردشگری همدان</p>}
      </LogoWrapper>

      <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

      <Ul isOpen={isOpen}>
        {data?.map((item, index) => {
          const isActive = pathname === item.to;
          return (
            <StyledLi className={isActive && "active"} key={index}>
              <StyledA
                as={Link}
                href={item.to}
                isOpen={isOpen}
                className={isActive && "active"}
              >
                <item.icon width="1.25rem" margin="0 0 0 .5rem" />
                <span>{item.text}</span>
              </StyledA>
            </StyledLi>
          );
        })}
      </Ul>
    </WebNav>
  );
};

const Toggle = styled(MemoLeftChervon)<{ isOpen: boolean }>`
  position: absolute;
  font-size: 1.5rem;
  left: -1.25rem;
  background-color: ${Color.white};
  padding: 0.25rem;
  border-radius: 50%;
  border: 1px solid ${Color.grayLight};
  fill: ${Color.grayLight};
  top: 2.5rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const pushIn = keyframes`
  0% {
    width:0;
  }
  100% {
    width:12rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  color: ${Color.Primary};
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  gap: 0.5rem;
  border: 1px solid ${Color.Primary};
  border-left: none;
  border-right: none;
  padding: 0.5rem;
  p {
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: ${pushIn} 0.7s 0.2s forwards;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
const Logo = styled.a`
  background-color: ${Color.Primary};
  font-weight: 600;
  padding: 6px;

  border-radius: 0.5rem;
  color: ${Color.white};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 2.25rem;
  text-align: center;
`;

const StyledLi = styled(Li)`
  border-radius: 0.5rem;
  overflow: hidden;

  &.active {
    background-color: ${Color.secondary50};
  }
`;

const StyledA = styled(A)<{ isOpen: boolean }>`
  color: ${Color.gray50};
  border-radius: 0.5rem;
  justify-content: ${({ isOpen }) => (!isOpen ? "center" : "flex-start")};
  padding: 0.75rem;
  /* transition: justify-content 0.3 cubic-bezier(0, 0.17, 1, -0.27); */

  &:hover {
    background-color: transparent;
  }

  svg {
    color: ${Color.gray50};
    font-size: 1.25rem;
  }
  span {
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
  &.active {
    font-weight: 700;
    color: ${Color.secondary};
    span,
    svg {
      color: ${Color.secondary};
    }
  }
`;
