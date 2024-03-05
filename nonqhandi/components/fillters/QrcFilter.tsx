import React from "react";
import MemoSearch from "../../assets/icons/Search";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Filter } from "../divitions/Fillter";
import FillterInput from "../inputs/FilterInput";

export const QrcFillter: React.FC = () => {
  return (
    <Filter>
      <FillterInput placeholder="جستجو در تعداد اسکن, تعداد پاسخ ها, زمان اعتبار و فعال/غیرفعال" />
    </Filter>
  );
};
