import * as React from "react";
import { Svg } from "../../components/Svg";

function Sort(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 22.117 19.789" {...props}>
      <g
        data-name="Group 209"
        transform="translate(-12.84 -.864)"
        fill="#e2c992"
      >
        <rect
          data-name="Rectangle 656"
          width={9.312}
          height={3.492}
          rx={1.746}
          transform="translate(25.645 17.161)"
        />
        <rect
          data-name="Rectangle 657"
          width={22.117}
          height={3.492}
          rx={1.746}
          transform="translate(12.84 .864)"
        />
        <rect
          data-name="Rectangle 658"
          width={13.969}
          height={3.492}
          rx={1.746}
          transform="translate(20.988 9.013)"
        />
      </g>
    </Svg>
  );
}

const MemoSort = React.memo(Sort);
export default MemoSort;
