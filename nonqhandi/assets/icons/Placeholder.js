import * as React from "react";
import { Svg } from "../../components/Svg";

function Placeholder(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 15.882 21.199" {...props}>
      <g data-name="Group 138">
        <g data-name="Group 137">
          <path
            data-name="Path 687"
            d="M7.941.5A7.579 7.579 0 00.5 8.193c0 2.738.806 3.837 4.677 9.114.672.916 1.434 1.954 2.305 3.156a.561.561 0 00.916 0c.866-1.195 1.625-2.229 2.294-3.142 3.881-5.292 4.689-6.394 4.689-9.128A7.579 7.579 0 007.941.5zm1.84 16.106c-.55.75-1.159 1.581-1.84 2.517-.685-.942-1.3-1.777-1.851-2.531-3.766-5.133-4.445-6.058-4.445-8.4a6.3 6.3 0 1112.592 0c0 2.337-.681 3.265-4.456 8.414z"
            fill="#277673"
            stroke="#277673"
          />
        </g>
      </g>
      <g data-name="Group 140">
        <g data-name="Group 139">
          <path
            data-name="Path 688"
            d="M7.942 4.541a3.53 3.53 0 103.53 3.53 3.534 3.534 0 00-3.53-3.53zm0 6.051a2.521 2.521 0 112.521-2.521 2.524 2.524 0 01-2.521 2.521z"
            fill="#277673"
            stroke="#277673"
          />
        </g>
      </g>
    </Svg>
  );
}

const MemoPlaceholder = React.memo(Placeholder);
export default MemoPlaceholder;
