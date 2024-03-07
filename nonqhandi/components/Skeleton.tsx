import styled, { keyframes } from "styled-components";

// Define a keyframe animation for the skeleton loading effect
const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

// Define the Skeleton component using styled-components
const SkeletonWrapper = styled.div`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  background: linear-gradient(to right, #f6f7f8 10%, #edeef1 20%, #f6f7f8 30%);
  background-size: 200% 100%;
  animation: ${shimmer} 2s infinite linear;
  border-radius: 0.5rem;
`;

const Skeleton = ({ width, height }) => {
  return <SkeletonWrapper width={width} height={height} />;
};

export default Skeleton;
