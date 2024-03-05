import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Input } from "./Input";

interface IFillter {
  placeholder: string;
}

const FillterInput: React.FC<IFillter> = ({ placeholder }) => {
  return (
    <FormWarrper>
      <Form>
        <Input bg={Color.white} placeholder={placeholder} />
        <Button
          padding=".5rem 1rem"
          bg={Color.gray}
          color={Color.grayDark}
          radius=".5rem"
          fs="16px"
        >
          <FaSearch />
          جستجو
        </Button>
      </Form>
      <Hr />
    </FormWarrper>
  );
};

export default FillterInput;

const FormWarrper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-top: 1rem;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBtn = styled(Button)`
  position: absolute;
  left: 0;
  padding: 0;
  margin: 0;

  &:hover {
    background-color: transparent;
  }
`;

const Hr = styled.hr`
  width: 100%;
  margin-top: 0.5rem;
  opacity: 0.5;
  color: ${Color.grayLight};
  border: 1px solid;
`;
