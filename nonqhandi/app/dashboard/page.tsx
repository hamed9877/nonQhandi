"use client";
import React from "react";
import styled from "styled-components";

import Skeleton from "@/components/Skeleton";
import { CardBar } from "@/components/card/CardBar";
import useLocalStorage from "@/hooks/useLocal";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
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
  const ndata = [
    {
      name: "فروردین",
      گنجنامه: 45,
      "عباس آباد": 34,
      "سراب گیان": 15,
      غارعلیصدر: 32,
    },
    {
      name: "اردیبهشت",
      گنجنامه: 34,
      "عباس آباد": 34,
      "سراب گیان": 23,
      غارعلیصدر: 42,
    },
    {
      name: "خرداد",
      گنجنامه: 22,
      "عباس آباد": 25,
      "سراب گیان": 18,
      غارعلیصدر: 30,
    },
    {
      name: "تیر",
      گنجنامه: 17,
      "عباس آباد": 20,
      "سراب گیان": 14,
      غارعلیصدر: 25,
    },
    {
      name: "مرداد",
      گنجنامه: 37,
      "عباس آباد": 40,
      "سراب گیان": 29,
      غارعلیصدر: 48,
    },
    {
      name: "شهریور",
      گنجنامه: 29,
      "عباس آباد": 32,
      "سراب گیان": 25,
      غارعلیصدر: 38,
    },
    {
      name: "مهر",
      گنجنامه: 48,
      "عباس آباد": 53,
      "سراب گیان": 39,
      غارعلیصدر: 62,
    },
    {
      name: "آبان",
      گنجنامه: 14,
      "عباس آباد": 15,
      "سراب گیان": 11,
      غارعلیصدر: 20,
    },
    {
      name: "آذر",
      گنجنامه: 82,
      "عباس آباد": 90,
      "سراب گیان": 65,
      غارعلیصدر: 110,
    },
    {
      name: "دی",
      گنجنامه: 52,
      "عباس آباد": 45,
      "سراب گیان": 32,
      غارعلیصدر: 60,
    },
    {
      name: "بهمن",
      گنجنامه: 45,
      "عباس آباد": 38,
      "سراب گیان": 28,
      غارعلیصدر: 50,
    },
    {
      name: "اسفند",
      گنجنامه: 75,
      "عباس آباد": 60,
      "سراب گیان": 50,
      غارعلیصدر: 85,
    },
  ];

  const renderLineChart = (
    <LineChart
      data={ndata}
      // margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis tick={{ fontSize: 10 }} dataKey="name" label="" name="hamed" />
      <YAxis />
      <Tooltip shared />
      <Legend />
      <Line type="monotone" dataKey="گنجنامه" stroke={Color.Secondary} />
      <Line type="monotone" dataKey="سراب گیان" stroke={Color.grayDark} />
      <Line type="monotone" dataKey="غارعلیصدر" stroke={Color.Tertiary} />
      <Line type="monotone" dataKey="عباس آباد" stroke={Color.red} />
    </LineChart>
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
          height={250}
          width={550}
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
      <PieChart margin={{ left: 0, right: 0 }} height={205} width={205}>
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
        <>
          <ChartWrapper>
            <Title>
              پربازدیدترین مکان‌ها <span>(دوره یکساله )</span>
            </Title>
            <WrapperInner>
              <ResponsiveContainer width="100%" height={200}>
                {renderLineChart}
              </ResponsiveContainer>
            </WrapperInner>
          </ChartWrapper>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 50%",
              gridTemplateRows: "50% 50%",
              gap: 8,
              padding: 8,
              margin: 8,
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

            <Card>
              <Text>۱۷۴۲ </Text>
              <SubText>گنجنامه </SubText>
            </Card>
            <Card>
              <Text>۲۳۴۱ </Text>
              <SubText>نظرات امروز </SubText>
            </Card>
          </div>
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
        </>
      )}
      {isLoading ? (
        <>
          <Skeleton height={300} width={"100%"} />
          <Skeleton height={300} width={"100%"} />
        </>
      ) : (
        <>
          <ChartWrapper>
            <Title>
              اسکن‌های انجام شده
              <span>(دوره یکساله)</span>
            </Title>
            <WrapperInner>
              <ResponsiveContainer width="100%" height={200}>
                {renderBar}
              </ResponsiveContainer>
            </WrapperInner>
          </ChartWrapper>
        </>
      )}
      {isLoading ? (
        <>
          <Skeleton height={300} width={"100%"} />
          <Skeleton height={300} width={"100%"} />
        </>
      ) : (
        <div
          style={{
            gridColumn: "2/4",
          }}
        >
          <ChartWrapper>
            <ResponsiveContainer width="100%" height={200}>
              <StackedBarChart />
            </ResponsiveContainer>
          </ChartWrapper>
        </div>
      )}
      <div
        style={{
          display: "flex",
          // flexDirection: "column",
          gridColumn: "1/4",
          flex: 1,
          margin: "0.5rem 0",
        }}
      >
        {isLoading ? (
          <>
            <Skeleton height={"120px"} width={"100%"} />
          </>
        ) : (
          <>
            <CardBar
              Num={32}
              subTitle="استفاده از پیشنهادات"
              Color={Color.Primary}
            />
            <CardBar
              Num={45}
              subTitle="نظرات مثبت امروز"
              Color={Color.Primary}
            />
            <CardBar Num={89} subTitle="هدف درآمدی" Color={Color.Primary} />
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Dashboard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: ${Shadow.cardShadow};
  padding: 1rem;
  height: 100%;

  border-radius: 1rem;
  align-items: center;
`;
const SubText = styled.p`
  font-size: 0.7rem;
  font-weight: bold;
  color: ${Color.Primary};
`;
const Text = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${Color.secondary};
`;
const Right = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const Left = styled.div`
  justify-content: start;
  display: flex;
  flex-direction: column;
`;
const WrapperInner = styled.div`
  justify-content: start;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  /* flex-wrap: wrap;
  display: flex;
  justify-content: center; */
  width: 100%;
  display: grid;
  grid-template-columns: 50% 23% 23%;
  gap: 1rem;
  row-gap: 0.5rem;

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
  margin: 0.5rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 15rem;
`;

const Title = styled.p`
  color: ${Color.grayDark};
  font-size: 18px;
  padding-bottom: 0.5rem;

  span {
    color: ${Color.gray50};
    font-size: 12px;
  }
`;
