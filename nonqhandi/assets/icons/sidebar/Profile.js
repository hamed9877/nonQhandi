import * as React from "react";
import { Svg } from "../../../components/Svg";

function Profile(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 30.415 30.415" {...props}>
      <path
        data-name="Path 28"
        d="M20.738 11.06a5.53 5.53 0 11-5.53-5.53 5.53 5.53 0 015.53 5.53zm-2.765 0a2.765 2.765 0 11-2.765-2.765 2.765 2.765 0 012.77 2.765z"
        fillRule="evenodd"
      />
      <path
        data-name="Path 29"
        d="M15.208 0a15.208 15.208 0 1015.207 15.208A15.207 15.207 0 0015.208 0zM2.765 15.208A12.393 12.393 0 005.4 22.869a12.445 12.445 0 0119.7-.116 12.443 12.443 0 10-22.335-7.545zM15.208 27.65a12.391 12.391 0 01-7.842-2.782 9.681 9.681 0 0115.8-.094 12.393 12.393 0 01-7.958 2.876z"
        fillRule="evenodd"
      />
    </Svg>
  );
}

const MemoProfile = React.memo(Profile);
export default MemoProfile;
