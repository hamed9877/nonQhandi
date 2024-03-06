import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";

export const CLineChart = ({ data }) => {
  const StyledTooltip = styled(Tooltip)`
    width: fit-content;
    height: auto;
  `;

  const renderLineChart = (
    <AreaChart
      width={1024}
      height={300}
      data={data}
      // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <StyledTooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stroke={Color.secondary}
        fill={Color.secondary50}
      />
    </AreaChart>
  );
  return renderLineChart;
};
