import * as React from "react";
import { Svg } from "../../components/Svg";

function FemaleMale(props) {
  return (
    <Svg viewBox="0 0 28.551 32" {...props}>
      <g stroke="none">
        <g stroke="none" data-name="Group 142">
          <g data-name="Group 141">
            <path
              data-name="Path 714"
              d="M5.71 3.023a3.115 3.115 0 103.115 3.115A3.115 3.115 0 005.71 3.023zm0 5.191a2.076 2.076 0 112.076-2.076A2.076 2.076 0 015.71 8.214z"
              fill="#277673"
            />
          </g>
        </g>
        <g data-name="Group 144">
          <g data-name="Group 143">
            <path
              data-name="Path 715"
              d="M11.4 21.042L8.284 10.66a.519.519 0 00-.5-.37h-4.15a.519.519 0 00-.5.37L.019 21.042a.519.519 0 00.5.668H2.6v6.749a.519.519 0 00.519.519H8.31a.519.519 0 00.519-.519V21.71H10.9a.519.519 0 00.5-.668zm-3.093-.37a.519.519 0 00-.519.519v6.749H6.229v-7.268H5.191v7.268H3.634v-6.75a.519.519 0 00-.519-.519h-1.9l2.8-9.344H7.4l2.8 9.344z"
              fill="#277673"
            />
          </g>
        </g>
        <g data-name="Group 146">
          <g data-name="Group 145">
            <path
              data-name="Path 716"
              d="M23.36 3.023a3.115 3.115 0 103.115 3.115 3.115 3.115 0 00-3.115-3.115zm0 5.191a2.076 2.076 0 112.076-2.076 2.076 2.076 0 01-2.076 2.076z"
              fill="#277673"
            />
          </g>
        </g>
        <g data-name="Group 148">
          <g data-name="Group 147">
            <path
              data-name="Path 717"
              d="M24.918 10.29h-3.115a3.638 3.638 0 00-3.634 3.634v7.266a.519.519 0 00.519.519h1.557v6.749a.519.519 0 00.519.519h5.191a.519.519 0 00.519-.519v-6.749h1.557a.519.519 0 00.519-.519v-7.268a3.638 3.638 0 00-3.632-3.632zm2.6 10.382H26.48v-6.229h-1.038v13.5h-1.563v-7.268h-1.038v7.268h-1.557v-13.5h-1.038v6.229h-1.038v-6.749a2.6 2.6 0 012.6-2.6h3.115a2.6 2.6 0 012.6 2.6z"
              fill="#277673"
            />
          </g>
        </g>
        <g data-name="Group 150">
          <g data-name="Group 149">
            <path
              data-name="Rectangle 561"
              fill="#277673"
              d="M14.275 0h1v32h-1z"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
}

const MemoFemaleMale = React.memo(FemaleMale);
export default MemoFemaleMale;
