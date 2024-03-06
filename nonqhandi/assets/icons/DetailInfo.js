import * as React from "react";
import { Svg } from "../../components/Svg";

function DetailInfo(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 10.777 12.416" {...props}>
      <g stroke="none">
        <path
          data-name="Path 562"
          d="M0 1.552A1.459 1.459 0 011.347 0H9.43a1.459 1.459 0 011.347 1.552v9.312a1.459 1.459 0 01-1.347 1.552H1.347A1.459 1.459 0 010 10.864zm6.016 3.56l-1.543.223-.055.3.3.063c.2.056.238.136.194.364l-.5 2.692c-.131.7.072 1.023.545 1.023a1.317 1.317 0 00.987-.463l.059-.323a.7.7 0 01-.463.192c-.185 0-.253-.15-.2-.415zm-.627-.844a.729.729 0 00.674-.776.729.729 0 00-.674-.776.729.729 0 00-.674.776.729.729 0 00.673.776z"
          fill="#fff"
          fillRule="evenodd"
        />
      </g>
    </Svg>
  );
}

const MemoDetailInfo = React.memo(DetailInfo);
export default MemoDetailInfo;
