import { useRouter } from "next/navigation";
import React from "react";
import MemoLeftChervon from "../../assets/icons/LeftChervon";
import { LayoutSize } from "../../interface/LayoutSize";
import { BackBtn } from "../buttons/BackBtn";
import { MainWrapper } from "../divitions/MainWarrper";
import { Main } from "./Main";
import { Page } from "./Page";

export const Layout: React.FC<LayoutSize> = ({
  children,
  SMain,
  SWrapper,
  isBackVisible: IsVisibilityBack,
  FilterBar: FillterBar,
  NavBar,
  bg,
  radius,
  border,
  overflow,
  padding,
}) => {
  const router = useRouter();
  return (
    <Page>
      {NavBar && <NavBar />}
      <Main padding={padding} SMain={SMain}>
        {FillterBar && <FillterBar />}

        <MainWrapper
          bg={bg}
          border={border}
          radius={radius}
          SWrapper={SWrapper}
          overflow={overflow}
          padding={padding}
        >
          {IsVisibilityBack && (
            <BackBtn
              onClick={() => router.back()}
              IsVisibilityBack={IsVisibilityBack}
            >
              <MemoLeftChervon width="1rem" />
            </BackBtn>
          )}
          {children}
        </MainWrapper>
      </Main>
    </Page>
  );
};
