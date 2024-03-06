import Link from "next/link";
import * as React from "react";
import MemoLeftChervon from "../../assets/icons/LeftChervon";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { BackBtn } from "../buttons/BackBtn";
import { Filter } from "../divitions/Fillter";

const CreatQuestionsFilter: React.FC = () => {
  return (
    <Filter>
      <Link href={Path.addQrc}>
        <BackBtn>
          <MemoLeftChervon fill={Color.Primary} />
        </BackBtn>
      </Link>
    </Filter>
  );
};

export default CreatQuestionsFilter;
