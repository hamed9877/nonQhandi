import dynamic from "next/dynamic";
import styled from "styled-components";

const DynamicMap = dynamic(() => import("./DynamicMap"), {
  ssr: false,
});

const Map = (props) => {
  return (
    <Wrapper style={{ aspectRatio: 2, zIndex: 0 }}>
      <DynamicMap {...props} />
    </Wrapper>
  );
};

export default Map;

const Wrapper = styled.div`
  aspect-ratio: 2;
  position: relative;
  z-index: 10;
`;
