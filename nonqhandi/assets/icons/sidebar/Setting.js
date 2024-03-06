import * as React from "react";
import { Svg } from "../../../components/Svg";

function Setting(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 28.845 27.978" {...props}>
      <g
        data-name="Icon feather-settings"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          data-name="Path 7"
          d="M18.228 13.989c0 2.451-1.7 4.437-3.806 4.437s-3.805-1.986-3.805-4.437 1.7-4.437 3.806-4.437 3.805 1.987 3.805 4.437z"
        />
        <path
          data-name="Path 8"
          d="M23.452 17.531a1.9 1.9 0 00.4 2.149l.073.071a2.308 2.308 0 010 3.342 2.5 2.5 0 01-3.453 0l-.073-.071a2.064 2.064 0 00-2.221-.39 1.948 1.948 0 00-1.22 1.783v.2a2.442 2.442 0 01-4.881 0v-.105a1.954 1.954 0 00-1.318-1.783 2.064 2.064 0 00-2.221.39l-.073.071a2.5 2.5 0 01-3.453 0 2.308 2.308 0 010-3.342l.073-.071a1.9 1.9 0 00.4-2.149 2.016 2.016 0 00-1.843-1.181H3.44a2.363 2.363 0 110-4.723h.11a2.01 2.01 0 001.843-1.275A1.9 1.9 0 004.99 8.3l-.073-.071a2.308 2.308 0 010-3.342 2.5 2.5 0 013.453 0l.073.071a2.064 2.064 0 002.221.39h.1a1.948 1.948 0 001.22-1.783v-.2a2.442 2.442 0 014.881 0v.106a1.948 1.948 0 001.22 1.783 2.064 2.064 0 002.221-.39l.073-.071a2.5 2.5 0 013.453 0 2.308 2.308 0 010 3.342l-.073.071a1.9 1.9 0 00-.4 2.149v.094a2.016 2.016 0 001.841 1.178h.2a2.363 2.363 0 110 4.723h-.11a2.016 2.016 0 00-1.843 1.181z"
        />
      </g>
    </Svg>
  );
}

const MemoSetting = React.memo(Setting);
export default MemoSetting;