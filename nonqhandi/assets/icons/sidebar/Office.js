import * as React from "react";
import { Svg } from "../../../components/Svg";

function Office(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 29.375 38.292" {...props}>
      <g strokeWidth={0.4}>
        <path
          data-name="Path 625"
          d="M28.657 34.319h-2.294V5.933a1.7 1.7 0 00-1.7-1.7h-9.457V.717A.518.518 0 0014.688.2h-8.66a.518.518 0 00-.518.517v3.514h-.8a1.7 1.7 0 00-1.7 1.7v28.388H.718a.518.518 0 00-.518.518v2.738a.518.518 0 00.518.518h27.939a.518.518 0 00.518-.518v-2.738a.518.518 0 00-.518-.518zM6.547 1.236h7.623v2.995H6.547zm-2.5 4.7a.667.667 0 01.666-.666H24.66a.667.667 0 01.666.666v28.383h-6.788v-5.625h1.294a.518.518 0 00.518-.518v-2.33a.518.518 0 00-.518-.518H9.544a.518.518 0 00-.518.518v2.33a.518.518 0 00.518.518h1.3v5.625H4.049zm6.013 21.723v-1.296h9.251v1.294zm1.812 1.036h5.626v5.625h-5.623zm16.266 8.361h-26.9v-1.7h26.9z"
        />
        <path
          data-name="Path 626"
          d="M6.491 11.081h6.014a.518.518 0 00.518-.518V7.709a.518.518 0 00-.518-.518H6.491a.518.518 0 00-.518.518v2.854a.518.518 0 00.518.518zm.518-2.854h4.977v1.818H7.011z"
        />
        <path
          data-name="Path 627"
          d="M6.491 17.24h6.014a.518.518 0 00.518-.518v-2.854a.518.518 0 00-.518-.518H6.491a.518.518 0 00-.518.518v2.854a.518.518 0 00.518.518zm.518-2.854h4.977v1.818H7.011z"
        />
        <path
          data-name="Path 628"
          d="M13.023 22.883v-2.855a.518.518 0 00-.518-.518H6.491a.518.518 0 00-.518.518v2.855a.518.518 0 00.518.518h6.014a.518.518 0 00.518-.518zm-1.036-.518H7.011v-1.819h4.977z"
        />
        <path
          data-name="Path 629"
          d="M16.871 11.081h6.013a.518.518 0 00.518-.518V7.709a.518.518 0 00-.518-.518h-6.013a.518.518 0 00-.518.518v2.854a.518.518 0 00.518.518zm.518-2.854h4.977v1.818h-4.977z"
        />
        <path
          data-name="Path 630"
          d="M16.871 17.24h6.013a.518.518 0 00.518-.518v-2.854a.518.518 0 00-.518-.518h-6.013a.518.518 0 00-.518.518v2.854a.518.518 0 00.518.518zm.518-2.854h4.977v1.818h-4.977z"
        />
        <path
          data-name="Path 631"
          d="M16.871 23.4h6.013a.518.518 0 00.518-.518v-2.854a.518.518 0 00-.518-.518h-6.013a.518.518 0 00-.518.518v2.855a.518.518 0 00.518.518zm.518-2.854h4.977v1.818h-4.977z"
        />
      </g>
    </Svg>
  );
}

const MemoOffice = React.memo(Office);
export default MemoOffice;
