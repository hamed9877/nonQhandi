import * as React from "react";
import { Svg } from "../../components/Svg";

function UserEdite(props) {
  return (
    <Svg viewBox="0 0 23.588 23.001" {...props}>
      <path
        data-name="Icon awesome-user-edit"
        d="M10.125 11.5a5.5 5.5 0 10-5.5-5.5 5.5 5.5 0 005.5 5.5zm3.85 1.375h-.718a7.48 7.48 0 01-6.265 0h-.717A5.776 5.776 0 00.5 18.65v1.787A2.063 2.063 0 002.562 22.5h11.812a2.063 2.063 0 01-.112-.915l.292-2.617.052-.477.339-.339 3.321-3.321a5.716 5.716 0 00-4.293-1.955zm1.946 6.243l-.292 2.621a.684.684 0 00.756.756L19 22.2l5.925-5.925-3.079-3.075-5.925 5.921zM27.7 12.054l-1.63-1.628a1.03 1.03 0 00-1.452 0l-1.624 1.624-.176.176 3.082 3.081 1.8-1.8a1.035 1.035 0 000-1.457z"
        fill="#118ab2"
        stroke="#118ab2"
      />
    </Svg>
  );
}

const MemoUserEdite = React.memo(UserEdite);
export default MemoUserEdite;
