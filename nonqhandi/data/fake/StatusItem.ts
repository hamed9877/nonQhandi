import React from "react";
import { AiOutlineScan } from "react-icons/ai";

import { FaComment } from "react-icons/fa6";

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

export const StatusItem: IStatus[] = [
  { text: "1234", icon: FaComment },
  { text: "1245", icon: AiOutlineScan },
];
