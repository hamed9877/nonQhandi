"use client";
import styled from "styled-components";
import MemoDev from "../../public/images/Dev";

export default function DevPage() {
  return (
    <ImageWrapper>
      <MemoDev />
      <h2> در حال راه اندازی ...</h2>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  width: 100%;
  svg {
    width: 80%;
    height: 80%;
  }
  h2 {
    margin-top: -5rem;
    font-size: 32px;
    color: #563bad;
  }
`;
