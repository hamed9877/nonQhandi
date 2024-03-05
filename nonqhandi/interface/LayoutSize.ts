import { ReactNode } from "react";

//FIXME this amount of props doesn't look normal!
export interface LayoutSize {
  SMain?: {
    border: string;
    alignItems: string;
    justifyContent: string;
  };
  SWrapper?: {
    borderRaduis?: string;
    border?: string;
    width?: string;
    height?: string;
    boxShadow?: string;
    bg?: string;
    padding?: string;
    beforeHeight?: string;
  };
  isBackVisible?: boolean;
  FilterBar?: React.FC | boolean;
  NavBar?: React.FC<Active> | null;
  bg?: string;
  radius?: string;
  border?: string;
  overflow?: string;
  padding?: string;
  children?: ReactNode;
}

interface Active {
  active?: number;
}

export interface SMin {
  border?: string;
  alingitems?: string;
  justifyContent?: string;
}
