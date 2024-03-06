import * as React from "react";
import { Svg } from "../../../components/Svg";

function User(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 28.168 23.54" {...props}>
      <g data-name="Group 113">
        <g data-name="Group 112">
          <path
            data-name="Path 638"
            d="M10.227.2a5.4 5.4 0 105.4 5.4 5.405 5.405 0 00-5.4-5.4zm0 9.256a3.857 3.857 0 113.857-3.857 3.862 3.862 0 01-3.857 3.857z"
            strokeWidth={0.4}
          />
        </g>
      </g>
      <g data-name="Group 115">
        <g data-name="Group 114">
          <path
            data-name="Path 639"
            d="M21.027 6.371a3.857 3.857 0 103.857 3.857 3.862 3.862 0 00-3.857-3.857zm0 6.171a2.314 2.314 0 112.314-2.314 2.317 2.317 0 01-2.314 2.314z"
            strokeWidth={0.4}
          />
        </g>
      </g>
      <g data-name="Group 119">
        <g data-name="Group 118">
          <path
            data-name="Path 641"
            d="M10.227 12.541A10.039 10.039 0 00.2 22.568a.771.771 0 001.543 0 8.485 8.485 0 1116.969 0 .771.771 0 001.543 0 10.039 10.039 0 00-10.028-10.027z"
            strokeWidth={0.4}
          />
        </g>
      </g>
      <g data-name="Group 121">
        <g data-name="Group 120">
          <path
            data-name="Path 642"
            d="M21.027 15.627a6.942 6.942 0 00-3.6 1 .771.771 0 10.8 1.319 5.4 5.4 0 018.195 4.62.771.771 0 001.543 0 6.951 6.951 0 00-6.938-6.939z"
            strokeWidth={0.4}
          />
        </g>
      </g>
    </Svg>
  );
}

const MemoUser = React.memo(User);
export default MemoUser;
