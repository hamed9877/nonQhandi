import React from "react";
import { BiDetail } from "react-icons/bi";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";

import { Button } from "./Button";
interface IProps {
  onClick?: () => void;
}
const DetailBtn: React.FC<IProps> = ({ onClick }) => {
  return (
    <DBtn onClick={onClick && onClick}>
      <BiDetail />
    </DBtn>
  );
};

export default DetailBtn;

const DBtn = styled(Button)`
  font-size: 16px;
  padding: 0.5rem;
  fill: ${Color.gray50};
  border-radius: 50%;
  margin-right: 0;

  :hover {
    background: ${Color.gray};
  }
`;
