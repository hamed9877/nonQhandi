import * as React from "react";
import { Svg } from "../../components/Svg";

function QuestionSquareFill(props) {
  return (
    <Svg viewBox="0 0 24.416 26.188" {...props}>
      <path
        data-name="Path 171"
        d="M3.052 0A3.169 3.169 0 000 3.273v19.641a3.169 3.169 0 003.052 3.273h18.312a3.169 3.169 0 003.052-3.273V3.273A3.169 3.169 0 0021.364 0zm6.974 9.874H8.012c-.046-3.086 2.182-4.146 4.206-4.146 2.132 0 4.079 1.2 4.079 3.666a4.036 4.036 0 01-1.9 3.367c-1.124.915-1.541 1.257-1.541 2.433v.581h-2l-.011-.758a3.781 3.781 0 011.782-3.252c.9-.727 1.472-1.2 1.472-2.244A1.822 1.822 0 0012.1 7.609a2.026 2.026 0 00-2.073 2.265zm1.909 10.546a1.528 1.528 0 110-3.056 1.529 1.529 0 110 3.056z"
        fill="#605f5f"
        fillRule="evenodd"
      />
    </Svg>
  );
}

const MemoQuestionSquareFill = React.memo(QuestionSquareFill);
export default MemoQuestionSquareFill;
