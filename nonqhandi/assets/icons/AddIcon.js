import * as React from "react";
import { Svg } from "../../components/Svg";

function AddIcon(props) {
  return (
    <Svg viewBox="0 -3 47.372 47.2" {...props}>
      <g data-name="Group 47" transform="translate(-661.801 -591.4)">
        <ellipse
          data-name="Ellipse 53"
          cx={17.612}
          cy={16.309}
          rx={17.612}
          ry={16.309}
          transform="translate(666.375 596.679)"
          fill="#fff"
        />
        <path
          data-name="Path 206"
          d="M683.987 592.049c-12.253 0-22.186 9.4-22.186 20.988s9.933 20.988 22.186 20.988 22.186-9.4 22.186-20.988-9.933-20.988-22.186-20.988zm0 39.353c-10.721 0-19.413-8.222-19.413-18.365s8.692-18.364 19.413-18.364 19.414 8.222 19.414 18.364-8.693 18.365-19.414 18.365z"
          fill="#fff"
        />
        <text
          data-name="+"
          transform="translate(675.145 622)"
          fill="#014f86"
          stroke="#0052cc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={0.1}
          fontSize={29}
          fontFamily="Vazir"
          letterSpacing="0em"
        >
          <tspan x={16} y={0}>
            {"+"}
          </tspan>
        </text>
      </g>
    </Svg>
  );
}

const MemoAddIcon = React.memo(AddIcon);
export default MemoAddIcon;
