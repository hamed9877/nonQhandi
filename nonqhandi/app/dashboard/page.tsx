"use client";
import React from "react";
import styled from "styled-components";

import Skeleton from "@/components/Skeleton";
import { CardBar } from "@/components/card/CardBar";
import useLocalStorage from "@/hooks/useLocal";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
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

  const width = 600;

  const [data, _, isLoading] = useLocalStorage("data");
  const dashboard = data?.dashboard;

  const renderLineChart = (
    <AreaChart
      data={dashboard[0]}
      // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{ fontSize: 10 }} dataKey="name" label="" name="hamed" />
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
  const StackedBarChart = ({}) => {
    const data = [
      {
        month: "فزوردین",
        "نظرات مثبت  ": 4000,
        "نظرات منفی ": 6000,
      },
      {
        month: "اردیبهشت",
        "نظرات مثبت  ": 2000,
        "نظرات منفی ": 5500,
      },
      {
        month: "خرداد",
        "نظرات مثبت  ": 5000,
        "نظرات منفی ": 2800,
      },
      {
        month: "تیر",
        "نظرات مثبت  ": 4000,
        "نظرات منفی ": 3000,
      },
      {
        month: "مرداد",
        "نظرات مثبت  ": 1000,
        "نظرات منفی ": 6500,
      },
      {
        month: "شهریور",
        "نظرات مثبت  ": 1800,
        "نظرات منفی ": 2800,
      },
    ];
    return (
      <div>
        <BarChart
          data={data}
          height={200}
          width={300}
          margin={{ right: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tick={{ fontSize: 9 }} dataKey="month" />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip wrapperStyle={{ fontSize: 14 }} />
          <Legend wrapperStyle={{ fontSize: 14 }} />
          <Bar
            barSize={20}
            dataKey="نظرات مثبت  "
            stackId="a"
            fill={Color.Primary}
          />
          <Bar barSize={20} dataKey="نظرات منفی " stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    );
  };
  const DoughnutChart = () => {
    const data = [
      { name: "گنجنامه", value: 300 },
      { name: "عباس آباد", value: 200 },
      { name: "باباطاهر", value: 100 },
    ];

    const COLORS = [Color.secondary, "#82ca9d", Color.Primary];

    return (
      <PieChart margin={{ left: 0, right: 0 }} height={200} width={200}>
        <Pie
          data={data}
          cx="50%"
          innerRadius={50}
          outerRadius={80}
          cy="50%"
          paddingAngle={2}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              style={{ margin: "0.8rem" }}
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend fontSize={2} />
      </PieChart>
    );
  };
  const renderBar = (
    <BarChart data={dashboard[1]}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{ fontSize: 8 }} dataKey="name" name="hamed" label="" />
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
          <Skeleton height={300} width={"100%"} />
          <Skeleton height={300} width={"100%"} />
        </>
      ) : (
        <Right>
          <ChartWrapper>
            <Title>
              بیشترین مکان‌های بازدید شده{" "}
              <span>(دوره یکساله - ۱۰ مورد بیشتر)</span>
            </Title>
            <WrapperInner>
              <ResponsiveContainer width="100%" height={200}>
                {renderLineChart}
              </ResponsiveContainer>
            </WrapperInner>
          </ChartWrapper>
          <ChartWrapper>
            <Title>
              بیشترین مکان‌های بازدید سراب گیان
              <span>(دوره یکساله)</span>
            </Title>
            <WrapperInner>
              <ResponsiveContainer width="100%" height={200}>
                {renderBar}
              </ResponsiveContainer>
            </WrapperInner>
          </ChartWrapper>
        </Right>
      )}
      <Left>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            margin: "0.5rem 0",
          }}
        >
          <CardBar
            Num={32}
            subTitle="استفاده از پیشنهادات"
            Color={Color.Primary}
          />
          <CardBar Num={45} subTitle="نظرات مثبت امروز" Color={Color.Primary} />
          <CardBar Num={89} subTitle="هدف درآمدی" Color={Color.Primary} />
        </div>
        <ChartWrapper>
          <ResponsiveContainer width="100%" height={200}>
            <StackedBarChart />
          </ResponsiveContainer>
        </ChartWrapper>
      </Left>
      <Left>
        <ChartWrapper>
          <Title>بیشترین مکان‌های بازدید امروز</Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DoughnutChart />
          </div>
        </ChartWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flex: "1",
              alignItems: "center",
            }}
          >
            <Card>
              <Text>۹۲۲۱ </Text>
              <SubText>کاربر آنلاین</SubText>
            </Card>
            <Card>
              <Text>۳۲۴۰۱</Text>
              <SubText>کاربر جدید</SubText>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card>
              <Text>۱۷۴۲ </Text>
              <SubText>گنجنامه </SubText>
            </Card>
            <Card>
              <Text>۲۳۴۱ </Text>
              <SubText>نظرات امروز </SubText>
            </Card>
          </div>
        </div>
      </Left>
    </Wrapper>
  );
};

export default Dashboard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${Shadow.cardShadow};
  margin: 0.5rem;
  padding: 1rem;
  height: 100%;
  flex: 1;

  border-radius: 1rem;
  align-items: center;
`;
const SubText = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  color: ${Color.Primary};
`;
const Text = styled.p`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${Color.secondary};
`;
const Right = styled.div`
  justify-content: center;
  display: flex;
  flex: 2;
  flex-direction: column;
`;
const Left = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const WrapperInner = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  display: flex;
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
  min-width: 20rem;
  flex: 1;
  margin: 0.5rem 0;
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
