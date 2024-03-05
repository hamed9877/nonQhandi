import { IoTimeOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import styled from "styled-components";
import MemoQrCode from "../../assets/icons/sidebar/QrCode";
import { Color } from "../../styles/global/Color";
import DeleteBtn from "../buttons/DeleteBtn";
import DetailBtn from "../buttons/DetailBtn";
import { LabelWrapper } from "../divitions/LabelWarrper";
import { P } from "../paragraphs/P";
import { CardAction } from "./ActionCard";
import { CardContainer } from "./CardContainer";
import { CardWarrper } from "./CardWarrper";

export const CodeCard = () => {
  return (
    <CardContainer index={0} height="auto" align="center">
      <DetailWrapper direction="row">
        <MemoQrCode fill={Color.black} width="9rem" />
        <DetailWrapper>
          <P fs="1rem">دهکده تفریحی گردشگری گنجنامه</P>
          <LabelWrapper>
            <MdDateRange fill={Color.grayDark} />
            <span>21 / 1 / 1400</span>
          </LabelWrapper>
          <LabelWrapper>
            <IoTimeOutline fill={Color.grayDark} />
            <span>10 : 30</span>
          </LabelWrapper>
        </DetailWrapper>
      </DetailWrapper>
      <QrDescription>توضیحات: وجود آشغال و تمیز نبودن محیط</QrDescription>
      <CardAction>
        <DeleteBtn />
        <DetailBtn />
      </CardAction>
    </CardContainer>
  );
};

interface IDetail {
  direction?: string;
}
const DetailWrapper = styled(CardWarrper)<IDetail>`
  flex-direction: ${({ direction }) => direction || "column"};
  align-items: flex-start;
`;
const QrDescription = styled.div`
  width: 100%;
  height: 7rem;
  font-size: 0.875rem;

  padding: 0.5rem;

  border: 1px solid ${Color.grayLight};
  border-left: none;
  border-right: none;
  background-color: ${Color.secondary50};
  color: ${Color.grayDark};
`;
