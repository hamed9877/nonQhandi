"use client";
import styled, { keyframes } from "styled-components";

// Keyframe animation for the spinner
const spinAnimation = keyframes`
  0% {
    box-shadow: 0 24px 0 -24px #7766a798;
  }
  100% {
    box-shadow: 0 24px 0 #7766a78d;
  }
`;

// Wrapper component
const Wrapper = styled.div`
  z-index: 999;
  opacity: 0;
  transition: all 0.3s ease;
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  &[data-show="true"] {
    opacity: 1;
    visibility: visible;
  }
`;

// Circle component
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  animation: ${spinAnimation} 0.9s ease alternate infinite;
  animation-delay: 0.36s;
  top: -16px;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: ${spinAnimation} 0.9s ease alternate infinite;
  }

  &::before {
    left: -28px;
    animation-delay: 0.18s;
  }

  &::after {
    right: -28px;
    animation-delay: 0.54s;
  }
`;

// Loading component
const Loading = ({ isLoading }) => {
  return (
    <Wrapper data-show={isLoading}>
      <Circle />
    </Wrapper>
  );
};

export default Loading;
