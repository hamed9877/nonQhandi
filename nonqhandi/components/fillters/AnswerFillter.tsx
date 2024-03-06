import React from "react";
import MemoSort from "../../assets/icons/Sort";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Filter } from "../divitions/Fillter";
import { FillterBtnWarrper } from "../divitions/FillterBtnWarrper";
import FillterInput from "../inputs/FilterInput";
import { H2 } from "../paragraphs/H2";

export const AnswerFillter = () => {
  return (
    <Filter>
      <FillterInput placeholder="جستجو در نام مرکز,متن سوال و نوع سوال" />
      <FillterBtnWarrper>
        <H2>لیست سوالات</H2>

        <Button radius=".5rem" bg={Color.Primary}>
          <MemoSort />
          <span>مرتب سازی</span>
        </Button>
      </FillterBtnWarrper>
    </Filter>
  );
};
