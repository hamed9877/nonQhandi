import styled from "styled-components";

interface IProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  border?: string;
}
export const Img = styled.img<IProps>`
  width: ${({ width }) => width || "3rem"};
  height: ${({ height }) => height || "3rem"};
  object-fit: cover;

  border: ${({ border }) => border || "none"};
  border-radius: ${({ borderRadius }) => borderRadius || "none"};
  filter: brightness(0.9);
`;
