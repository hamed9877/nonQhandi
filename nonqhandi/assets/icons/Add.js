import * as React from "react";
import { Svg } from "../../components/Svg";

function Add(props) {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path d="M28 14H18V4a2 2 0 00-4 0v10H4a2 2 0 000 4h10v10a2 2 0 004 0V18h10a2 2 0 000-4z" />
    </Svg>
  );
}

const MemoAdd = React.memo(Add);
export default MemoAdd;
