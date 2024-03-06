"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import { Page } from "../../components/divitions/MobeilPage";
import { Form } from "../../components/inputs/Form";
import { Input } from "../../components/inputs/Input";
import { P } from "../../components/paragraphs/P";
import { Span } from "../../components/paragraphs/Span";
import { Color } from "../../styles/global/Color";

const Authy: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const search = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState(false);

  return (
    <Page>
      <Container>
        <P color={Color.black} fs="1rem" margin="1rem 0 0 0 " aling="center">
          کد تایید را در کادر زیر وارد کنید.
        </P>
        <P color={Color.grayDark} fs="1rem" margin="1rem 0 ">
          کد تایید به شماره <Span>{search.get("phone")}</Span> ارسال شده است
        </P>
        <Form
          onSubmit={handleSubmit((data) => {
            const user = JSON.parse(localStorage.getItem("data")).user.filter(
              (va) => va.phone == search.get("phone")
            );
            if (data.code == "1111" && user.length != 0) {
              user[0].role == "Expert"
                ? router.push("/expert")
                : router.push("/dashboard");
            } else {
              setError(true);
            }
          })}
          direction="column"
        >
          <InputNumber typeof="number" {...register("code")} type="text" />
          <Link href="#">
            <ReSend>ارسال مجدد</ReSend>
          </Link>
          <Link href="#">
            <ReSend>تغییر شماره همراه</ReSend>
          </Link>
          <Send type="submit">تایید</Send>
          {error && <Error>شماره مورد نظر در سیستم نمی باشد</Error>}
        </Form>
      </Container>
    </Page>
  );
};

export default Authy;
const Error = styled.p`
  font-size: 0.7rem;
  padding: 1rem 0;
  font-weight: bold;
  color: red;
`;
const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 13% 0 0;

  @media screen and (max-width: 640px) {
    align-items: center;
    width: 100%;
    margin: 0;
    margin-top: 50%;
    /* transform: translateY(-40%); */
    /* max-width: 360px; */

    p {
      width: fit-content;
    }
  }
`;

const ReSend = styled(Span)`
  cursor: pointer;
  text-align: center;
  margin-top: 0.5rem;
  text-decoration: underline;
  font-size: 0.875rem;
`;
const Send = styled(Button)`
  color: ${Color.white};
  background-color: ${Color.secondary};
  width: 20rem;
  margin: 0;
  margin-top: 0.75rem;
  border-radius: 0.5rem;
  height: 3rem;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;

const InputNumber = styled(Input)`
  direction: ltr;
  text-align: left;
  margin-top: 1.5rem;
  background-color: ${Color.gray};
  color: ${Color.grayDark};
  height: 3rem;
  @media screen and (max-width: 640px) {
    width: 100%;
    margin-top: 4rem;
  }
`;
