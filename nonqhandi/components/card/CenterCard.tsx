import React from "react";
import styled from "styled-components";
import { IQrc } from "../../data/fake/Qrcdetail";
import { IStatus } from "../../data/fake/StatusItem";
import CodeListBtn from "../buttons/CodeListBtn";
import DeleteBtn from "../buttons/DeleteBtn";
import DetailBtn from "../buttons/DetailBtn";
import ToggleBtn from "../buttons/Toggle";
import { Img } from "../divitions/Img";
import { CardAction } from "./ActionCard";
import { CardContainer } from "./CardContainer";
import { CardDetail } from "./CardDetail";
import { CardWarrper } from "./CardWarrper";
import CenterStatus from "./CenterStatusCard";
import { Detail } from "./Detail";

interface Props {
  data: IQrc[];
  dataStatus: IStatus[];
}

const CenterCard: React.FC<Props> = ({ data, dataStatus }) => {
  return (
    <CardContainer height="auto" maxwidth="32%">
      <ToggleBtn />
      <Img width="100%" height="50%" src="/images/map.jpeg" alt="map" />
      <CardWarrper>
        <CardDetail>
          <Detail data={data} />
          <Img width="4rem" height="4rem" src="/images/logo.png" />
        </CardDetail>
      </CardWarrper>
      <CenterStatus data={dataStatus} />
      <CardAction>
        <DeleteBtn />
        <CodeListBtn />
        <DetailBtn />
      </CardAction>
    </CardContainer>
  );
};

const CircleImg = styled.img``;
export default CenterCard;
