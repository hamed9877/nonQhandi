import { Color } from "./../../styles/global/Color";
import styled from "styled-components";

export const MapWarrper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.6;
  padding: 1.5rem 2rem;
  border-radius: 0 3rem 3rem 0;
  background-color: ${Color.Primary};
`;
