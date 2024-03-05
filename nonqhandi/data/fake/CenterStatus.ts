import React from "react";
import MemoPerson from "../../assets/icons/Person";
import MemoPhoneCall from "../../assets/icons/PhoneCall";
import MemoPlaceholder from "../../assets/icons/Placeholder";

interface IProps {
  width?: string;
  color?: string;
  margin?: string;
  fill?: string;
}
export interface IStatus {
  text: string;
  icon: React.FC<IProps>;
}

export const CenterS: IStatus[] = [
  { text: "مسعود توتونچیان", icon: MemoPerson },
  { text: "09181234567", icon: MemoPhoneCall },
  {
    text: "همدان,شهرک صنعتی بوعلی,بلوار یکم,خیابان سیزدهم,شماره 38",
    icon: MemoPlaceholder,
  },
];
