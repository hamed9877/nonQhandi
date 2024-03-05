import styled from "styled-components";
import MemoLogo from "../public/images/Logo";
import { Color } from "../styles/global/Color";

interface IProps {
  size?: string;
}
export default function LogoBar({ size }: IProps) {
  return (
    <LogoWrapper>
      <Logo size={size}>
        <MemoLogo />
      </Logo>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  color: ${Color.Primary};
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  gap: 0.5rem;
  /* border: 1px solid ${Color.Primary}; */
  border-left: none;
  border-right: none;
  padding: 0.5rem;
  p {
    white-space: nowrap;
    overflow: hidden;
  }
`;
const Logo = styled.a<{ size?: string }>`
  background-color: ${Color.Primary};
  font-weight: 600;
  padding: 6px;

  border-radius: 0.5rem;
  color: ${Color.white};
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ size }) => size || "2.25rem"};
  text-align: center;
`;
