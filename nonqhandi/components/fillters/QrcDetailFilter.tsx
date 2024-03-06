import Link from "next/link";
import React from "react";
import MemoLeftChervon from "../../assets/icons/LeftChervon";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { BackBtn } from "../buttons/BackBtn";
import { Filter } from "../divitions/Fillter";
import { H2 } from "../paragraphs/H2";

export const QrcDetailFilter: React.FC = () => {
  return (
    <Filter>
      <H2>جزییات کد</H2>
      <Link href={Path.qrcScreen}>
        <BackBtn>
          <MemoLeftChervon fill={Color.Primary} margin="0" />
        </BackBtn>
      </Link>
    </Filter>
  );
};
