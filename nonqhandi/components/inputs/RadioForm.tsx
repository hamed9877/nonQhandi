import React from "react";
import styled from "styled-components";
import { Label } from "./Label";
import { RadioInput } from "./RadioInput";

interface IRadioForm {
  direction?: string;
  width?: string;
  justify?: string;
  height?: string;
}

export const RadioForm: React.FC<IRadioForm> = ({
  direction,
  height,
  width,
  justify,
}) => {
  return (
    <RadioWrapper
      direction={direction}
      justify={justify}
      width={width}
      height={height}
    >
      <RadioInput type="radio" id="1" name="radioQus" value="perfect" />
      <Label htmlFor="1">عالی</Label>
      <RadioInput type="radio" id="2" name="radioQus" value="great" />
      <Label htmlFor="2">خوب</Label>
      <RadioInput type="radio" id="3" name="radioQus" value="good" />
      <Label htmlFor="3">قابل قبول</Label>
      <RadioInput type="radio" id="4" name="radioQus" value="bad" />
      <Label htmlFor="4">ضعیف</Label>
    </RadioWrapper>
  );
};

const RadioWrapper = styled.div<IRadioForm>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "flex-start"};

  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};

  margin-top: 1rem;
`;
