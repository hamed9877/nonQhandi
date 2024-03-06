import Link from "next/link";
import React from "react";
import MemoLeftChervon from "../../assets/icons/LeftChervon";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { BackBtn } from "../buttons/BackBtn";
import { Filter } from "../divitions/Fillter";
import { H2 } from "../paragraphs/H2";

const QuestionsListFilter: React.FC = () => {
  return (
    <Filter>
      <H2>لیست سوالات</H2>
      <Link href={Path.creatQuestion}>
        <BackBtn>
          <MemoLeftChervon fill={Color.Primary} />
        </BackBtn>
      </Link>
    </Filter>
  );
};

export default QuestionsListFilter;
