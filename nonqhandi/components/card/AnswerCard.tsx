import { Color } from "../../styles/global/Color";
import KebabBtn from "../buttons/KebabBtn";
import { RadioForm } from "../inputs/RadioForm";
import { Number } from "../paragraphs/Number";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";
import { CardWarrper } from "./CardWarrper";

const AnswerCard = () => {
  return (
    <CardContainer
      direction="row"
      maxwidth="100%"
      height="auto"
      raduis=".5rem 0 0 .5rem "
      align="center"
    >
      <Number>1</Number>
      <CardWarrper direction="column">
        <P fs="0.875rem" color={Color.black}>
          بهداشت و تمیزی محصولات برتر را در مجموع چگونه ارزیابی میکنید؟
        </P>
        <RadioForm />
      </CardWarrper>
      <KebabBtn />
    </CardContainer>
  );
};

export default AnswerCard;
