import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { RadioForm } from "../inputs/RadioForm";
import { A } from "../link/A";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";
import { CardWarrper } from "./CardWarrper";

const AnswerDetailCard = () => {
  return (
    <CardContainer
      shadow="none"
      bg="transparent"
      direction="column"
      justify="space-between"
    >
      <P fs="1rem">میزان رضایت خود از خدمات ما را چگونه ارزیابی می کنید؟</P>
      <CardWarrper direction="row" width="100%">
        <RadioForm
          direction="column"
          width="15%"
          height="10rem"
          justify="space-between"
        />
        <Chart></Chart>
      </CardWarrper>
      <AnswerAction>
        <A
          href="/"
          bg={Color.Primary}
          padding="1rem 2rem"
          raduis=".5rem"
          margin="0 1rem 0 0 "
        >
          کدها
        </A>
        <A
          href="/"
          bg={Color.Primary}
          padding="1rem 2rem"
          raduis=".5rem"
          margin="0 1rem 0 0 "
        >
          مراکز
        </A>
        <A
          href="/"
          bg={Color.Primary}
          padding="1rem 2rem"
          raduis=".5rem"
          margin="0 1rem 0 0 "
        >
          کاربران
        </A>
      </AnswerAction>
    </CardContainer>
  );
};
export default AnswerDetailCard;

const Chart = styled.div`
  flex: 0.5;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 1px 5px 1px #00000080;
  border-radius: 1rem;
`;

const AnswerAction = styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
`;
