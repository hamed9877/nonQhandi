import * as React from "react";
import { Svg } from "../../components/Svg";

function MobilePhone(props) {
  return (
    <Svg viewBox="0 -2 20.6 40" {...props}>
      <path d="M13.05 32.4a2.257 2.257 0 00-2.25-2.25 2.25 2.25 0 101.589 3.839 2.167 2.167 0 00.661-1.589zm5.85-4.5V8.1a.912.912 0 00-.9-.9H3.6a.912.912 0 00-.9.9v19.8a.912.912 0 00.9.9H18a.912.912 0 00.9-.9zM13.5 4.05a.4.4 0 00-.45-.45h-4.5a.4.4 0 00-.45.45.4.4 0 00.45.45h4.5a.4.4 0 00.45-.45zm8.1-.45v28.8A3.651 3.651 0 0118 36H3.6a3.457 3.457 0 01-2.531-1.069A3.465 3.465 0 010 32.4V3.6a3.457 3.457 0 011.069-2.531A3.465 3.465 0 013.6 0H18a3.457 3.457 0 012.531 1.069A3.465 3.465 0 0121.6 3.6z" />
    </Svg>
  );
}

const MemoMobilePhone = React.memo(MobilePhone);
export default MemoMobilePhone;
