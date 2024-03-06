import { useRouter } from "next/navigation";
import * as React from "react";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { A } from "../link/A";

const Accept: React.FC = () => {
  const router = useRouter();
  return (
    <Modal>
      <ModalContainer>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div>
            <p style={{ width: "100%", textAlign: "center" }}>
              اطلاعات با موفقیت ثبت شد
            </p>
            <Button
              onClick={() => router.push("/")}
              bg={Color.secondary}
              width="100%"
              radius=".5rem"
              margin="1rem 0 0 0"
              // onClick={() => setModal(!modal)}
            >
              بازگشت
            </Button>
          </div>
          {/* <CTA hoverColor={Color.grayDark} bgHover={Color.gray}>
            <MemoQuestionDocument />
            لیست سوالات آماده
          </CTA>
          <Link href={Path.creatQuestion}>
            <CTA hoverColor={Color.grayDark} bgHover={Color.gray}>
              <MemoQuestionSquareFill />
              سوال جدید
            </CTA>
          </Link> */}
        </div>
      </ModalContainer>
    </Modal>
  );
};

export default Accept;

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
