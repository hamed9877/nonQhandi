import React from "react";
import { InputWrapper } from "../divitions/InputWarrper";
import { CircleInput } from "./CircleInput";

export const CircleForm: React.FC = () => {
  return (
    <InputWrapper>
      <CircleInput min="1" max="9" type="number" />
      <CircleInput />
      <CircleInput />
      <CircleInput />
    </InputWrapper>
  );
};
