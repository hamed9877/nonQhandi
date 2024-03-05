import * as React from "react";
import { Svg } from "../../components/Svg";

function Scan(props) {
  return (
    <Svg viewBox="0 0 29.532 29.532" {...props}>
      <g fill="none" stroke="#fff" strokeLinecap="round">
        <path
          data-name="Path 94"
          d="M20.813 27.985h3.234a3.938 3.938 0 003.938-3.938v-3.234"
          strokeLinejoin="round"
          strokeWidth={3.094}
        />
        <path
          data-name="Path 95"
          d="M27.985 8.719V5.485a3.938 3.938 0 00-3.938-3.938h-3.234"
          strokeLinejoin="round"
          strokeWidth={3.094}
        />
        <path
          data-name="Path 96"
          d="M8.719 27.985H5.485a3.938 3.938 0 01-3.938-3.938v-3.234"
          strokeLinejoin="round"
          strokeWidth={3.094}
        />
        <path
          data-name="Path 97"
          d="M1.547 8.719V5.485a3.938 3.938 0 013.938-3.938h3.234"
          strokeLinejoin="round"
          strokeWidth={3.094}
        />
        <path data-name="Line 10" strokeWidth={3.9} d="M5.047 15.047h20" />
      </g>
    </Svg>
  );
}

const MemoScan = React.memo(Scan);
export default MemoScan;
