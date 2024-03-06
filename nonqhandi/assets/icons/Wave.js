import * as React from "react";
import { Svg } from "../../components/Svg";

function Wave(props) {
  return (
    <Svg viewBox="0 0 1440 320" {...props}>
      <path
        fill="#fff"
        d="M0 224l48-26.7C96 171 192 117 288 128s192 85 288 80 192-91 288-101.3C960 96 1056 160 1152 176s192-16 240-32l48-16v192H0z"
      />
    </Svg>
  );
}

const MemoWave = React.memo(Wave);
export default MemoWave;
