import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Img } from "../divitions/Img";
import { AddCardInput } from "../inputs/AddCardInput";
import { Form } from "../inputs/Form";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";

export const AddCountryCard = () => {
  return (
    <CardContainer small="true" width="90%" direction="column">
      <P color={Color.secondary} aling="center" fs="1rem">
        نام کشور را به انگلیسی و فارسی وارد نمایید
      </P>
      <Form>
        <AddCardInput type="text" placeholder="انگلیسی" />
        <AddCardInput type="text" placeholder="فارسی" />

        <Img
          src="/images/map.jpeg"
          width="90%"
          height="50%"
          borderRadius="1rem"
        />
        <Button bg={Color.secondary} width="5rem" radius=".7rem">
          ثبت
        </Button>
      </Form>
    </CardContainer>
  );
};
