import React from "react";
import { FaTrash } from "react-icons/fa6";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Button } from "./Button";
interface Iprops {
  onClick?: () => void;
}
const DeleteBtn: React.FC<Iprops> = ({ onClick }) => {
  return (
    <DBtn onClick={() => onClick()}>
      <FaTrash />
    </DBtn>
  );
};

export default DeleteBtn;

const DBtn = styled(Button)`
  font-size: 16px;
  padding: 0.5rem;
  fill: ${Color.gray50};
  border-radius: 50%;

  background: transparent;
  :hover {
    fill: ${Color.red};
    background: #d800322e;
  }
`;
