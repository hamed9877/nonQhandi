import * as React from "react";
import { Svg } from "../../components/Svg";

function Search(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 30.621 30.621" {...props}>
      <g
        data-name="Icon feather-search"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path
          data-name="Path 608"
          d="M25.5 13.5a12 12 0 11-12-12 12 12 0 0112 12z"
        />
        <path data-name="Path 609" d="M28.5 28.5l-6.525-6.525" />
      </g>
    </Svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
