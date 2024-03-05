import * as React from "react";
import { Svg } from "../../components/Svg";

function LeftChervon(props) {
  return (
    <Svg viewBox="0 0 256 256" {...props}>
      <path d="M207.093 30.187L176.907 0l-128 128 128 128 30.186-30.187L109.28 128z" />
    </Svg>
  );
}

const MemoLeftChervon = React.memo(LeftChervon);
export default MemoLeftChervon;
