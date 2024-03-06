import * as React from "react";
import { Svg } from "../../components/Svg";

function EmailSolid(props) {
  return (
    <Svg viewBox="-2 0 37 24.011" {...props}>
      <path
        data-name="Path 65"
        d="M30.4.011a2 2 0 00-.41 0h-28a2 2 0 00-.53.08l14.45 14.39z"
      />
      <path
        data-name="Path 66"
        d="M31.88 1.401l-14.56 14.5a2 2 0 01-2.82 0L.07 1.511a2 2 0 00-.07.5v20a2 2 0 002 2h28a2 2 0 002-2v-20a2 2 0 00-.12-.61zM3.37 22.011H1.98v-1.43l7.27-7.21 1.41 1.41zm26.61 0h-1.4l-7.29-7.23 1.41-1.41 7.27 7.21z"
      />
    </Svg>
  );
}

const MemoEmailSolid = React.memo(EmailSolid);
export default MemoEmailSolid;
