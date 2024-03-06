import { LayoutSize } from "../../interface/LayoutSize";
import { Color } from "./Color";

export const SmallScreen: LayoutSize = {
  SMain: {
    alignItems: "center",
    border: "none",
    justifyContent: "center",
  },
  SWrapper: {
    bg: Color.white,
    border: `solid 0.0625rem ${Color.secondary}`,
    boxShadow: `0px 0.125rem 0.625rem 0 ${Color.grayDark}`,
    borderRaduis: "0 0 1.5rem 1.5rem",
    width: "26rem",
    height: "95%",
    padding: "0",
    beforeHeight: "40%",
  },
};

export const NormalScreen: LayoutSize = {
  SMain: {
    alignItems: "center",
    border: `solid 1.1rem ${Color.Primary}`,
    justifyContent: "center",
  },
  SWrapper: {
    bg: "transparent",
    border: "0",
    boxShadow: `0  0.125rem 0.5rem ${Color.shadow}`,
    borderRaduis: "1.5rem 1.5rem 0 0",
    width: "100%",
    height: "100%",
    padding: "2rem",
  },
};
