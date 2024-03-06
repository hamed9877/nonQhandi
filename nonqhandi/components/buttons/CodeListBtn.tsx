import React from "react";
import styled from "styled-components";
import MemoListcode from "../../assets/icons/Listcode";
import { Color } from "../../styles/global/Color";
import { Button } from "./Button";

const CodeListBtn: React.FC = () => {
  return (
    <DBtn>
      <MemoListcode width="1.5rem" fill={Color.Primary} />
      لیست کدها{" "}
    </DBtn>
  );
};

export default CodeListBtn;

const DBtn = styled(Button)`
  width: 8rem;

  font-size: 0.75rem;
  border: 1px solid ${Color.Primary};
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  color: ${Color.Primary};
`;
