import Link from "next/link";
import * as React from "react";
import styled from "styled-components";
import MemoQuestionDocument from "../../assets/icons/QuestionDocument";
import MemoQuestionSquareFill from "../../assets/icons/QuestionSquareFill";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { CardAction } from "../card/ActionCard";
import { A } from "../link/A";

const AddQrcModal: React.FC = () => {
  return (
    <Modal>
      <ModalContainer>
        <CardAction>
          <CTA hoverColor={Color.grayDark} bgHover={Color.gray}>
            <MemoQuestionDocument />
            لیست سوالات آماده
          </CTA>
          <Link href={Path.creatQuestion}>
            <CTA hoverColor={Color.grayDark} bgHover={Color.gray}>
              <MemoQuestionSquareFill />
              سوال جدید
            </CTA>
          </Link>
        </CardAction>
      </ModalContainer>
    </Modal>
  );
};

export default AddQrcModal;

const Modal = styled.div`
  height: 80%;
  width: 60%;
  background-color: ${Color.background};

  position: relative;
  left: 10%;
  top: 50%;

  padding: 0.75rem;

  border-radius: 0.5rem;

  transform: translate(-50%, -50%);
`;

const ModalContainer = styled.div`
  display: flex;
  align-items: flex-end;

  height: 100%;
  width: 100%;

  padding-bottom: 4rem;

  border-radius: 0.5rem;
  border: 1px solid ${Color.grayLight};

  background: url("./images/call-center.svg") no-repeat;
  background-size: 30%;
  background-position: center 15%;
  background-blend-mode: normal;
  background-color: ${Color.white};
`;

const CTA = styled(A)`
  color: ${Color.grayDark};
  border: 1px dashed ${Color.grayDark};
  border-radius: 0.5rem;
  width: 14rem;
  justify-content: center;
  padding: 1rem 1.5rem;
`;
