import Link from "next/link";
import React from "react";
import styled from "styled-components";
import MemoQrCode from "../../assets/icons/sidebar/QrCode";
import { Color } from "../../styles/global/Color";
import { Circle } from "../divitions/Circle";
import { LabelWrapper } from "../divitions/LabelWarrper";
import { A } from "../link/A";
import { Label } from "../paragraphs/Label";
import { P } from "../paragraphs/P";

export const CodeHeader = () => {
  return (
    <HeaderWrraper>
      <HeaderContainer>
        <MemoQrCode width="3rem" fill={Color.black} />
        <DetailWrraper>
          <LabelWrapper>
            <Label>موضوع:</Label>
            <P fs="0.75rem">حله بله دییل</P>
          </LabelWrapper>
          <LabelWrapper>
            <Label>توضیحات:</Label>
            <P fs="0.75rem">حله بله دییل</P>
          </LabelWrapper>
        </DetailWrraper>
        <DownloadWrraper>
          <Link href="/">
            <A
              width="auto"
              color={Color.secondary}
              bgHover={Color.white}
              alignSelf="center"
              fs="0.875rem"
            >
              دانلود فایل
            </A>
          </Link>
          <Circle as={DownloadImge} src="/images/map.jpeg" position="unset" />
        </DownloadWrraper>
      </HeaderContainer>
    </HeaderWrraper>
  );
};

const HeaderWrraper = styled.div`
  background-color: ${Color.Primary};
  width: 100%;
  height: 8rem;
  padding: 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  background-color: ${Color.white};
  width: 100%;
  height: 100%;
  border-radius: 3rem;
`;
const DetailWrraper = styled.div`
  flex: 1;
`;
const DownloadWrraper = styled.div`
  display: flex;
  width: 10rem;
  justify-content: space-evenly;
`;
const DownloadImge = styled.img``;
