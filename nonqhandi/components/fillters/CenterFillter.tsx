import React from "react";
import MemoSort from "../../assets/icons/Sort";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Filter } from "../divitions/Fillter";
import { FillterBtnWarrper } from "../divitions/FillterBtnWarrper";
import FillterInput from "../inputs/FilterInput";
import { H2 } from "../paragraphs/H2";

export const CenterFillter = () => {
  return (
    <Filter>
      <FillterInput placeholder="جستجو در نام, شماره همراه, آدرس, دسته بندی, شهر, استان و فعال/غیرفعال" />
      <FillterBtnWarrper>
        <H2>لیست مراکز</H2>
        <Button radius=".5rem" bg={Color.Primary}>
          <MemoSort />
          <span>مرتب سازی</span>
        </Button>
      </FillterBtnWarrper>
    </Filter>
  );
};
