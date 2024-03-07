import { Color } from "@/styles/global/Color";
import { Shadow } from "@/styles/global/Shadow";
import React from "react";
import styled from "styled-components";
export const CardBar: React.FC<{
  Color: string;
  Num: number;
  subTitle: string;
}> = ({ Color, Num, subTitle }) => {
  return (
    <CardC>
      <UpCard>
        <div style={{ flex: 1 }}>
          <PTCard Color={Color}>{Num}%</PTCard>
        </div>
        <BarCard>
          <ActiveCard Color={Color} Num={Num}></ActiveCard>
          <NActiveCard Num={Num}></NActiveCard>
        </BarCard>
      </UpCard>
      <DownCard>
        <Tit>{subTitle}</Tit>
      </DownCard>
    </CardC>
  );
};
const Tit = styled.p`
  font-size: 0.7rem;
  color: ${Color.gray50};
`;
const UpCard = styled.div`
  display: flex;
  flex: 2;
  width: 100%;
  align-items: center;
`;
const ActiveCard = styled.div<{ Num: number; Color: string }>`
  width: ${(p) => p.Num}%;
  display: flex;
  background-color: ${(p) => p.Color};
  border-radius: 0 0.5rem 0.5rem 0;
  height: 0.4rem;
`;
const NActiveCard = styled.div<{ Num: number }>`
  width: ${(p) => 100 - p.Num}%;
  display: flex;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: #c7c4c4;
  height: 0.4rem;
`;
const DownCard = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;
const BarCard = styled.div`
  display: flex;
  flex: 4;
`;
const PTCard = styled.p<{ Color: string }>`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(p) => p.Color};
`;
const CardC = styled.div`
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
