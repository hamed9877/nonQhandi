import { Color } from "./../../styles/global/Color";
import styled from "styled-components";
import { A } from "../link/A";

export const AddBtn = styled(A)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background-color: ${Color.white};
  padding: 0.375rem;
  border: 0.3125rem solid ${Color.Primary};
  border-radius: 50%;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  fill: ${Color.Primary};
  box-shadow: 0 0.125rem 0.3125rem 0.0625rem ${Color.shadow};
`;
