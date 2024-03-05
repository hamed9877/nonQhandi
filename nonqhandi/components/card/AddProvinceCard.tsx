import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Img } from "../divitions/Img";
import { AddCardInput } from "../inputs/AddCardInput";
import { Form } from "../inputs/Form";
import { Option } from "../inputs/Option";
import { Select } from "../inputs/Select";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";

const AddProvinceCard = () => {
  return (
    <CardContainer small="true" width="90%" direction="column">
      <P color={Color.Primary} aling="center" fs="1rem">
        نام استان را به انگلیسی و فارسی وارد نمایید
      </P>
      <Form>
        <AddCardInput type="text" placeholder="انگلیسی" />
        <AddCardInput type="text" placeholder="فارسی" />
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
        <Button bg={Color.Primary} width="5rem" radius=".7rem">
          ثبت
        </Button>
      </Form>
    </CardContainer>
  );
};
export default AddProvinceCard;
