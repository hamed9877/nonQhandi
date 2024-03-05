import React from "react";
import styled from "styled-components";

interface IModal {
  scale: boolean;
  onClick?: () => void;
}

const ModalBox: React.FC<IModal> = ({ scale, onClick, children }) => {
  return (
    <ModalWrapper scale={scale} onClick={() => onClick()}>
      {children}
    </ModalWrapper>
  );
};

export default ModalBox;

const ModalWrapper = styled.div<IModal>`
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);

  opacity: ${({ scale }) => (scale ? "1" : "0")};

  scale: ${({ scale }) => (scale ? "1" : "0")};

  transition: all cubic-bezier(0.95, 0.18, 0.43, 1.31) 0.4s;
`;
