import Link from "next/link";
import React from "react";
import MemoLeftChervon from "../../assets/icons/LeftChervon";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { Filter } from "../divitions/Fillter";
import { A } from "../link/A";

export const AnswerDetailFillter = () => {
  return (
    <Filter>
      <Link href={Path.answer}>
        <A href={Path.answer} justify="end" bgHover={Color.Primary}>
          <MemoLeftChervon />
        </A>
      </Link>
    </Filter>
  );
};
