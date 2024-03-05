import * as React from "react";
import { Svg } from "../../components/Svg";

function Edite(props) {
  return (
    <Svg viewBox="0 0 32.39 29.9" {...props}>
      <g stroke="none">
        <path
          stroke="none"
          data-name="Icon awesome-edit"
          d="M22.5 4.921l5.02 5.233a.585.585 0 010 .8L15.37 23.627l-5.164.6a1.106 1.106 0 01-1.2-1.247l.577-5.387L21.737 4.921a.529.529 0 01.763 0zm9.02-1.328L28.8.761a2.114 2.114 0 00-3.072 0l-1.97 2.054a.585.585 0 000 .8l5.02 5.233a.529.529 0 00.768 0l1.974-2.055a2.338 2.338 0 000-3.2zM21.469 20.181v5.906H3.662V7.521H16.45a.67.67 0 00.473-.2l2.226-2.328a.7.7 0 00-.473-1.189H2.771A2.731 2.731 0 00.1 6.593v20.422A2.731 2.731 0 002.771 29.8H22.36a2.731 2.731 0 002.671-2.785V17.86a.666.666 0 00-1.141-.493l-2.226 2.321a.729.729 0 00-.195.493z"
        />
      </g>
    </Svg>
  );
}

const MemoEdite = React.memo(Edite);
export default MemoEdite;
