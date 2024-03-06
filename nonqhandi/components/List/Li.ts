import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { IProps } from "../IProps";
import { Animtion } from "./../../styles/global/Animation";

export const Li = styled.li<IProps>`
  color: ${(props) => props.color || Color.white};
  font-weight: 600;
  display: flex;
  transition: ${Animtion.softTarnsiton};
`;
