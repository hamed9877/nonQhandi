import * as React from "react";
import { Svg } from "../../components/Svg";

function PhoneCall(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 18.221 18.222" {...props}>
      <path
        data-name="Icon feather-phone-call"
        d="M4.009 7.163A3.98 3.98 0 017.15 4.016M.828 7.163A7.164 7.164 0 017.142.829m6.346.8h2.386a1.592 1.592 0 011.59 1.737 15.786 15.786 0 01-2.442 6.873 15.521 15.521 0 01-4.771 4.78 15.717 15.717 0 01-6.894 2.446 1.592 1.592 0 01-1.729-1.586v-2.39a1.592 1.592 0 011.363-1.593 10.194 10.194 0 002.237-.557 1.588 1.588 0 011.678.359l1.007 1.01a12.735 12.735 0 004.771-4.78l-1.01-1.012a1.6 1.6 0 01-.358-1.681 10.246 10.246 0 00.557-2.239 1.591 1.591 0 011.614-1.37z"
        fill="none"
        stroke="#277673"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </Svg>
  );
}

const MemoPhoneCall = React.memo(PhoneCall);
export default MemoPhoneCall;
