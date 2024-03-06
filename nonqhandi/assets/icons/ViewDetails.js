import * as React from "react";
import { Svg } from "../../components/Svg";

function ViewDetails(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 26.438 27.081" {...props}>
      <g data-name="Group 130" stroke="none" fill="#e2c992">
        <rect
          data-name="Rectangle 545"
          width={12.078}
          height={1.958}
          rx={0.979}
          transform="translate(3.657 5.955)"
        />
        <path
          data-name="Path 676"
          d="M21.65 20.675a4.255 4.255 0 10-1.617 1.619l4.787 4.787 1.613-1.617zm-1.92-.3a2.607 2.607 0 01-3.593 0 2.542 2.542 0 113.593 0z"
        />
        <path
          data-name="Path 677"
          d="M19.244 23.921H2.404a.483.483 0 01-.483-.481V2.4a.482.482 0 01.483-.483h16.84a.481.481 0 01.481.483v10.735a5.034 5.034 0 011.922.876V2.4a2.406 2.406 0 00-2.4-2.4H2.404a2.407 2.407 0 00-2.4 2.4v21.04a2.407 2.407 0 002.4 2.4h16.84c1.005 0 1.481-.238 1.839-1.115l-.872-.872a2.53 2.53 0 01-.967.068z"
        />
        <rect
          data-name="Rectangle 546"
          width={12.078}
          height={1.958}
          rx={0.979}
          transform="translate(3.657 11.473)"
        />
      </g>
    </Svg>
  );
}

const MemoViewDetails = React.memo(ViewDetails);
export default MemoViewDetails;
