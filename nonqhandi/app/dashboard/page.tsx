"use client";
import React from "react";
import styled from "styled-components";

import Skeleton from "@/components/Skeleton";
import useLocalStorage from "@/hooks/useLocal";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Color } from "../../styles/global/Color";
import { Shadow } from "../../styles/global/Shadow";

const Dashboard: React.FC = () => {
  const StyledTooltip = styled(Tooltip)`
    width: fit-content;
    height: auto;
  `;

  const width = 1000;
  const height = 300;

  const [data, _, isLoading] = useLocalStorage("data");
  const dashboard = data?.dashboard;

  const renderLineChart = (
    <AreaChart
      width={width}
      height={height}
      data={dashboard[0]}
      // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" label="" name="hamed" />
      <YAxis />
      <Tooltip shared />
      <Area
        type="monotone"
        dataKey="request"
        stroke={Color.secondary}
        fill={Color.secondary50}
      />
    </AreaChart>
  );

  const renderBar = (
    <BarChart width={width} height={height} data={dashboard[1]}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" name="hamed" label="" />
      <YAxis />
      <Tooltip shared />
      <Bar dataKey="request" fill={Color.secondary} />
    </BarChart>
  );

  return (
    <Wrapper>
      {/* <Img width="auto" height="100%" src="./images/dev.jpg" /> */}

      {isLoading ? (
        <>
          <Skeleton height={height} width={"100%"} />
          <Skeleton height={height} width={"100%"} />
        </>
      ) : (
        <>
          <ChartWrapper>
            <Title>
              بیشترین مکان‌های بازدید شده{" "}
              <span>(دوره یکساله - ۱۰ مورد بیشتر)</span>
            </Title>

            {renderLineChart}
          </ChartWrapper>

          <ChartWrapper>
            <Title>
              بیشترین مکان‌های بازدید سراب گیان
              <span>(دوره یکساله)</span>
            </Title>

            {renderBar}
          </ChartWrapper>
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  overflow: hidden;

  .recharts-wrapper {
    margin: 0;
    svg {
      overflow: visible;
    }
    .recharts-yAxis {
      .recharts-cartesian-axis-ticks {
        transform: translateX(-2.25rem);
      }
      .recharts-cartesian-axis-tick-line {
        transform: translateX(2.5rem);
      }
    }
  }
  .recharts-tooltip-wrapper,
  .recharts-default-tooltip {
    height: auto;
    width: fit-content;
  }
`;

const ChartWrapper = styled.div`
  box-shadow: ${Shadow.cardShadow};
  padding: 1rem;
  border-radius: 1rem;
`;

const Title = styled.p`
  color: ${Color.grayDark};
  font-size: 18px;
  padding-bottom: 1rem;

  span {
    color: ${Color.gray50};
    font-size: 12px;
  }
`;
