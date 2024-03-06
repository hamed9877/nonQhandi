import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { StatusItem } from "../../data/fake/StatusItem";
import DeleteBtn from "../buttons/DeleteBtn";
import DetailBtn from "../buttons/DetailBtn";
import ToggleBtn from "../buttons/Toggle";
import { Img } from "../divitions/Img";
import { CardAction } from "./ActionCard";
import { CardContainer } from "./CardContainer";
import { CardDetail } from "./CardDetail";
import CardStatus from "./CardStatus";
import { CardWarrper } from "./CardWarrper";
import { Detail, IDetail } from "./Detail";

export const Card: React.FC<{
  onClick?: () => void;
  index: number;
  Idata: IDetail;
}> = ({ index, Idata, onClick }) => {
  return (
    <CardContainer index={index} height="auto">
      <ToggleBtn />
      <ImageWrapper>
        <Img
          width="100%"
          height="240px"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Ganjnameh_inscriptions.jpg"
          alt="map"
        />

        <CardStatus data={StatusItem} />
      </ImageWrapper>
      <CardWarrper>
        <CardDetail>
          <Detail data={Idata} />
        </CardDetail>
      </CardWarrper>
      <CardAction>
        <DeleteBtn onClick={() => onClick()!} />

        <Link
          href={{
            pathname: "/qrcdetail",
            query: { id: Idata.id },
          }}
        >
          <DetailBtn />
        </Link>
      </CardAction>
    </CardContainer>
  );
};

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;
