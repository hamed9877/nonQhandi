import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Img } from "../divitions/Img";
import { AddCardInput } from "../inputs/AddCardInput";
import { Form } from "../inputs/Form";
import { Option } from "../inputs/Option";
import { Select } from "../inputs/Select";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";

const AddCityCard = () => {
  return (
    <CardContainer small="true" width="90%" direction="column">
      <P color={Color.secondary} aling="center" fs="1rem">
        نام شهرستان را به انگلیسی و فارسی وارد نمایید
      </P>
      <Form>
        <AddCardInput type="text" placeholder="انگلیسی" />
        <AddCardInput type="text" placeholder="فارسی" />
        <Select>
          <Option value="" disabled selected>
            نام استان
          </Option>
          <Option>همدان</Option>
        </Select>
        <Select>
          <Option value="" disabled selected>
            نام کشور
          </Option>
          <Option>ایران</Option>
        </Select>
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
export default AddCityCard;
