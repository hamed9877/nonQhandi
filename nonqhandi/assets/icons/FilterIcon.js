import * as React from "react";
import { Svg } from "../../components/Svg";

function FilterIcon(props) {
  return (
    <Svg viewBox="0 0 44.372 41.977" {...props}>
      <g transform="translate(-660.997 -594)">
        <ellipse
          data-name="Ellipse 22"
          cx={17.612}
          cy={16.309}
          rx={17.612}
          ry={16.309}
          transform="translate(665.572 598.728)"
          fill="#fff"
        />
        <path
          data-name="Path 100"
          d="M679.833 622.914l2.332 1.166v-7.682a1.166 1.166 0 00-.338-.816l-7.554-7.659h18.139l-7.539 7.659a1.166 1.166 0 00-.338.816l-.035 9.011 2.332 1.166v-9.7l7.667-7.784a1.7 1.7 0 00.49-1.166v-1.168a1.166 1.166 0 00-1.166-1.166h-20.984a1.166 1.166 0 00-1.166 1.166v1.166a1.7 1.7 0 00.49 1.168l7.671 7.787z"
          fill="#014f86"
        />
        <path
          data-name="Path 101"
          d="M683.183 594c-12.253 0-22.186 9.4-22.186 20.988s9.933 20.988 22.186 20.988 22.186-9.4 22.186-20.988S695.436 594 683.183 594zm0 39.353c-10.721 0-19.413-8.222-19.413-18.365s8.692-18.364 19.413-18.364 19.414 8.222 19.414 18.364-8.693 18.365-19.414 18.365z"
          fill="#fff"
        />
      </g>
    </Svg>
  );
}

const MemoFilterIcon = React.memo(FilterIcon);
export default MemoFilterIcon;
