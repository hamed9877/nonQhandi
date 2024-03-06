import React from "react";
import styled from "styled-components";
import MemoAdd from "../../assets/icons/Add";
import MemoEmailSolid from "../../assets/icons/EmailSolid";
import MemoIdCard from "../../assets/icons/IdCard";
import MemoPerson from "../../assets/icons/Person";
import MemoSmartphone from "../../assets/icons/Smartphone";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Circle } from "../divitions/Circle";
import { InputWrapper } from "../divitions/InputWarrper";
import { AddCardInput } from "../inputs/AddCardInput";
import { Form } from "../inputs/Form";
import { Svg } from "../Svg";
import { CardContainer } from "./CardContainer";

export const EditProfileCard = () => {
  return (
    <CardContainer
      direction="column"
      justify="space-beetwen"
      width="90%"
      padding="1rem"
      top="-15%"
      align="center"
    >
      <ImgSelect>
        <Circle position="unset" width="8rem" height="8rem" />
        <Add>
          <MemoAdd width="1rem" heigth="1rem" fill={Color.white} />
        </Add>
      </ImgSelect>
      <Form>
        <InputWrapper>
          <InputIcon as={MemoPerson} />
          <AddCardInput placeholder="نام و نام خانوادگی" />
        </InputWrapper>
        <InputWrapper>
          <InputIcon as={MemoIdCard} />
          <AddCardInput placeholder="کد ملی" />
        </InputWrapper>
        <InputWrapper>
          <InputIcon as={MemoSmartphone} />
          <AddCardInput placeholder="شماره همراه" />
        </InputWrapper>
        <InputWrapper>
          <InputIcon as={MemoEmailSolid} />
          <AddCardInput placeholder="ایمیل" />
        </InputWrapper>
        <Button
          bg={Color.secondary}
          padding="1rem 2rem"
          radius="0.625rem"
          margin="1rem 0 0 0"
        >
          ثبت
        </Button>
      </Form>
    </CardContainer>
  );
};

const ImgSelect = styled.div`
  position: absolute;
  top: -22%;
`;
const Add = styled(Button)`
  position: absolute;
  bottom: 10%;
  right: -0.5rem;
  background-color: ${Color.secondary};
  border: 0.0625rem solid ${Color.white};
  padding: 0.5rem;
  border-radius: 50%;
`;
const InputIcon = styled(Svg)`
  position: absolute;
  right: 0.25rem;
  fill: ${Color.black};
`;
