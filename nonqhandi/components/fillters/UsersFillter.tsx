import React from "react";
import MemoSort from "../../assets/icons/Sort";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Filter } from "../divitions/Fillter";
import { FillterBtnWarrper } from "../divitions/FillterBtnWarrper";
import FillterInput from "../inputs/FilterInput";
import { H2 } from "../paragraphs/H2";

export const UsersFilter = () => {
  return (
    <Filter>
      <FillterInput placeholder="جستجو در تعداد اسکن, تعداد پاسخ ها, زمان اعتبار و فعال/غیرفعال" />
      <FillterBtnWarrper>
        <H2>لیست کدهای اسکن شده</H2>
        <FillterBtnWarrper>
          <Button radius=".5rem" bg={Color.Primary}>
            <MemoSort />
            <span>مرتب سازی</span>
          </Button>
        </FillterBtnWarrper>
      </FillterBtnWarrper>
    </Filter>
  );
};
