import * as React from "react";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { IDetail } from "../card/Detail";
import { P } from "../paragraphs/P";

interface IQrcInfo {
  data: IDetail;
}

const QrcInfo: React.FC<IQrcInfo> = ({ data }) => {
  return (
    <DetailWrapper>
      <InfoWrapper>
        <Label>موضوع</Label>{" "}
        <P fs="0.875rem">{data && data.subject ? data.subject : ""}</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>مرکز</Label>{" "}
        <P fs="0.875rem">{data && data.org ? data.org : ""}</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>برچسب</Label>{" "}
        <P fs="0.875rem">{data && data.tag ? data.tag : ""}</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>عنوان</Label>{" "}
        <P fs="0.875rem">{data && data.title ? data.title : ""}</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>وضعیت</Label> <P fs="0.875rem">فعال </P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>تعداد پاسخ</Label> <P fs="0.875rem">125</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>تعداد اسکن</Label> <P fs="0.875rem">1254</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>تاریخ اعتبار</Label> <P fs="0.875rem">1 / 2 / 1400</P>
      </InfoWrapper>
      <InfoWrapper>
        <Label>آدرس</Label> <P fs="0.875rem">{data && data.address}</P>
      </InfoWrapper>
    </DetailWrapper>
  );
};

export default QrcInfo;

const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: 1rem;
`;

const Label = styled.label`
  color: ${Color.grayDark};
  margin-left: 0.5rem;
  flex: 0 0 5rem;
`;
const InfoWrapper = styled.div`
  flex: 0 0 33%;
  display: flex;
  align-items: center;

  &:last-child {
    flex: 0 0 100%;
  }
`;
