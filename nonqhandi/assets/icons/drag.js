import * as React from "react";
import { Svg } from "../../components/Svg";

function drag(props) {
  return (
    <Svg viewBox="0 0 28.853 32" {...props}>
      <g stroke="none">
        <defs>
          <clipPath id="prefix__c">
            <use xlinkHref="#prefix__a" />
          </clipPath>
          <clipPath id="prefix__d">
            <use xlinkHref="#prefix__b" />
          </clipPath>
        </defs>
        <g data-name="Group 238" transform="translate(-48.683 -35.283)">
          <g data-name="Polygon 2">
            <path d="M66.552 40.283h-7.884l3.942-3.64 3.942 3.64z" />
            <path d="M62.61 38.005l-1.385 1.278h2.77l-1.385-1.278m0-2.614a.3.3 0 01.203.08l5.733 5.292a.3.3 0 01-.203.52H56.877a.3.3 0 01-.203-.52l5.733-5.292a.3.3 0 01.203-.08z" />
          </g>
          <g data-name="Polygon 3">
            <path d="M58.668 62.283h7.884l-3.942 3.64-3.942-3.64z" />
            <path d="M62.61 64.561l1.385-1.278h-2.77l1.385 1.278m0 2.614a.3.3 0 01-.203-.08l-5.733-5.292a.3.3 0 01.203-.52h11.466a.3.3 0 01.203.52l-5.733 5.292a.3.3 0 01-.203.08z" />
          </g>
          <g
            data-name="Rectangle 710"
            transform="translate(48.683 43.55)"
            strokeWidth={5}
          >
            <rect
              id="prefix__a"
              width={28.853}
              height={3.5}
              rx={0.5}
              stroke="none"
            />
            <path
              d="M0 1h28.853m-2.5-1v3.5m2.5-1H0m2.5 1V0"
              fill="none"
              clipPath="url(#prefix__c)"
            />
          </g>
          <g
            data-name="Rectangle 711"
            transform="translate(48.683 49.294)"
            strokeWidth={5}
          >
            <rect
              id="prefix__b"
              width={28.853}
              height={3.5}
              rx={0.5}
              stroke="none"
            />
            <path
              d="M0 1h28.853m-2.5-1v3.5m2.5-1H0m2.5 1V0"
              fill="none"
              clipPath="url(#prefix__d)"
            />
          </g>
          <rect
            data-name="Rectangle 712"
            width={28.853}
            height={3.5}
            rx={0.5}
            transform="translate(48.683 55.038)"
          />
        </g>
      </g>
    </Svg>
  );
}

const Memodrag = React.memo(drag);
export default Memodrag;
