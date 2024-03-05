import * as React from "react";
import { Svg } from "../../../components/Svg";

function featherSettings(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <g
        data-name="Icon feather-settings"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          data-name="Path 7"
          d="M19.872 16A4.184 4.184 0 0116 20.437 4.184 4.184 0 0112.128 16 4.184 4.184 0 0116 11.563 4.184 4.184 0 0119.872 16z"
        />
        <path
          data-name="Path 8"
          d="M26.091 20.091a2.25 2.25 0 00.45 2.482l.082.082a2.729 2.729 0 11-3.859 3.859l-.082-.082a2.268 2.268 0 00-3.845 1.609v.232a2.727 2.727 0 01-5.455 0v-.123a2.25 2.25 0 00-1.473-2.059 2.25 2.25 0 00-2.482.45l-.082.082a2.729 2.729 0 11-3.859-3.859l.082-.082a2.268 2.268 0 00-1.609-3.845h-.232a2.727 2.727 0 110-5.455h.123a2.25 2.25 0 002.059-1.473 2.25 2.25 0 00-.45-2.482l-.082-.082a2.729 2.729 0 113.859-3.859l.082.082a2.25 2.25 0 002.482.45h.109a2.25 2.25 0 001.364-2.059v-.232a2.727 2.727 0 015.455 0v.123a2.268 2.268 0 003.845 1.609l.082-.082a2.729 2.729 0 113.859 3.859l-.082.082a2.25 2.25 0 00-.45 2.482v.109a2.25 2.25 0 002.059 1.364h.232a2.727 2.727 0 010 5.455h-.123a2.25 2.25 0 00-2.059 1.364z"
        />
      </g>
    </Svg>
  );
}

const MemofeatherSettings = React.memo(featherSettings);
export default MemofeatherSettings;
