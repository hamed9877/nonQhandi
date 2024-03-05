import * as React from "react";
import { Svg } from "../../../components/Svg";

function City(props) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 26.737 32.905" {...props}>
      <path
        data-name="Icon material-location-city"
        d="M17.825 15.587V5.2L13.368 0 8.912 5.2v3.464H0v24.241h26.737V15.587zM5.942 29.442H2.971v-3.464h2.971zm0-6.927H2.971V19.05h2.971zm0-6.927H2.971v-3.465h2.971zm8.912 13.855h-2.971v-3.465h2.971zm0-6.927h-2.971V19.05h2.971zm0-6.927h-2.971v-3.466h2.971zm0-6.927h-2.971V5.2h2.971zm8.912 20.782H20.8v-3.466h2.971zm0-6.927H20.8V19.05h2.971z"
      />
    </Svg>
  );
}

const MemoCity = React.memo(City);
export default MemoCity;
