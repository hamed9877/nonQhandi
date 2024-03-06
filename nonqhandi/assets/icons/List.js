import * as React from "react";
import { Svg } from "../../components/Svg";

function List(props) {
  return (
    <Svg viewBox="0 0 11 12.945" {...props}>
      <path
        data-name="Path 563"
        d="M9.5 1.295h-8a.588.588 0 00-.5.647V11a.588.588 0 00.5.647h8A.588.588 0 0010 11V1.942a.588.588 0 00-.5-.647zM1.5 0A1.764 1.764 0 000 1.942V11a1.764 1.764 0 001.5 1.945h8A1.764 1.764 0 0011 11V1.942A1.764 1.764 0 009.5 0zm1 3.236h1v1.295h-1zm2.5 0a.588.588 0 00-.5.647.588.588 0 00.5.647h3a.588.588 0 00.5-.647.588.588 0 00-.5-.647zM3.5 5.825h-1V7.12h1zm1 .647a.588.588 0 01.5-.647h3a.588.588 0 01.5.647.588.588 0 01-.5.647H5a.588.588 0 01-.5-.646zm-1 1.942h-1v1.295h1zm1 .647a.588.588 0 01.5-.647h3a.588.588 0 01.5.647.588.588 0 01-.5.647H5a.588.588 0 01-.5-.646z"
        fill="#fff"
        fillRule="evenodd"
      />
    </Svg>
  );
}

const MemoList = React.memo(List);
export default MemoList;
