import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Font } from "../../styles/global/Font";

interface IProps {
  bg?: string;
  fs?: string;
  width?: string;
  color?: string;
  radius?: string;
  margin?: string;
  hoverColor?: string;
  padding?: string;
  isOutlined?: boolean;
}

export const Button = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${({ color, isOutlined }) =>
    isOutlined ? Color.grayDark : color || Color.white};
  width: ${({ width }) => width || ""};
  text-align: center;
  margin: ${({ margin }) => margin || ".5rem"};
  padding: ${({ padding }) => padding || ".5rem 1rem "};
  font-weight: 600;
  background-color: ${({ bg }) => bg || "transparent"};
  font-size: ${({ fs }) => (fs ? fs : Font.normal)};
  border: ${({ isOutlined }) =>
    isOutlined ? `1px solid  ${Color.grayDark}` : "none"};
  border-radius: ${({ radius }) => radius || ""};

  &:hover {
    background-color: ${({ hoverColor, isOutlined }) =>
      isOutlined ? Color.gray : hoverColor || Color.BtnHover};
    cursor: pointer;
  }
  svg {
    color: inherit;
    fill: inherit;
  }
  @media screen and (max-width: 640px) {
    :hover {
      background-color: ${({ bg }) => bg || "transparent"};
    }
  }
`;
