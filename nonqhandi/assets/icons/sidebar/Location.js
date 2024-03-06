import * as React from "react";
import { Svg } from "../../../components/Svg";

function Location(props) {
  return (
    <Svg
      data-name="Icon material-location-on"
      width="1em"
      height="1em"
      viewBox="0 0 21 30"
      {...props}
    >
      <path
        data-name="Icon material-location-on"
        d="M10.5 0A10.492 10.492 0 000 10.5C0 18.375 10.5 30 10.5 30S21 18.375 21 10.5A10.492 10.492 0 0010.5 0zm0 14.25a3.75 3.75 0 113.75-3.75 3.751 3.751 0 01-3.75 3.75z"
      />
    </Svg>
  );
}

const MemoLocation = React.memo(Location);
export default MemoLocation;
