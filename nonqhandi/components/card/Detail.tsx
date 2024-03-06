import React from "react";
import { FaLocationDot, FaTags } from "react-icons/fa6";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { P } from "../paragraphs/P";

export interface IDetail {
  title: string;
  subject: string;
  address: string;
  tag: string;
  org: string;
  id: string;
}
interface Iprops {
  data: IDetail;
}
export const Detail: React.FC<Iprops> = ({ data }) => {
  return (
    <div>
      <H4>{data.title}</H4>
      <Details>
        <FaTags />

        <P color={Color.grayDark} fs={"14px"}>
          {data.subject}
        </P>
      </Details>
      <Details>
        <FaLocationDot />

        <P color={Color.grayDark} fs={"14px"}>
          {data.address}
        </P>
      </Details>
    </div>
  );
};

const Details = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: ${Color.gold};
`;

const H4 = styled.h4`
  font-weight: 600;
  color: ${Color.Primary};
  margin-bottom: 0.75rem;
`;
