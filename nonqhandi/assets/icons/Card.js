import * as React from "react";
import { Svg } from "../../components/Svg";

function Card(props) {
  return (
    <Svg viewBox="0 0 30.218 19.836" {...props}>
      <g fill="#277673" stroke="none">
        <path
          data-name="Path 704"
          d="M27.607 0H2.612A2.586 2.586 0 000 2.554v14.728a2.586 2.586 0 002.612 2.554h24.995a2.586 2.586 0 002.612-2.554V2.554A2.586 2.586 0 0027.607 0zm1.714 17.282a1.7 1.7 0 01-1.714 1.676H2.612A1.7 1.7 0 01.9 17.282V2.554A1.7 1.7 0 012.612.878h24.995a1.7 1.7 0 011.714 1.676zm0 0"
        />
        <path
          data-name="Path 705"
          d="M14.454 2.837H3.599a.484.484 0 00-.468.5v1.2a.469.469 0 10.936 0v-.7h9.919v12.185H4.067v-9.49a.469.469 0 10-.936 0v9.989a.485.485 0 00.468.5h10.855a.485.485 0 00.468-.5V3.336a.484.484 0 00-.468-.5zm0 0"
        />
        <path
          data-name="Path 706"
          d="M27.407 3.995H17.028a.508.508 0 000 1h10.379a.508.508 0 000-1zm0 0"
        />
        <path
          data-name="Path 707"
          d="M27.416 7.618h-2.265a.511.511 0 000 1h2.265a.511.511 0 000-1zm0 0"
        />
        <path
          data-name="Path 708"
          d="M16.992 8.617h5.776c.206 0 .374-.224.374-.5s-.167-.5-.374-.5h-5.776c-.206 0-.374.223-.374.5s.163.5.374.5zm0 0"
        />
        <path
          data-name="Path 709"
          d="M27.407 11.241H17.028a.508.508 0 000 1h10.379a.508.508 0 000-1zm0 0"
        />
        <path
          data-name="Path 710"
          d="M23.11 14.864h-6.052a.5.5 0 000 1h6.052a.5.5 0 000-1zm0 0"
        />
        <path
          data-name="Path 711"
          d="M5.752 14.923a.469.469 0 10.936 0 2.344 2.344 0 114.679 0 .469.469 0 10.936 0 3.55 3.55 0 00-1.59-3 3.55 3.55 0 001.59-3 3.282 3.282 0 10-6.55 0 3.55 3.55 0 001.59 3 3.551 3.551 0 00-1.59 3zm.936-5.994a2.344 2.344 0 112.339 2.5 2.425 2.425 0 01-2.34-2.499zm0 0"
        />
      </g>
    </Svg>
  );
}

const MemoCard = React.memo(Card);
export default MemoCard;
