"use client";
import LogoBar from "@/components/LogoBar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import { Page } from "../../components/divitions/MobeilPage";
import { Form } from "../../components/inputs/Form";
import { Input } from "../../components/inputs/Input";
import { P } from "../../components/paragraphs/P";
import { Color } from "../../styles/global/Color";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(false);
  return (
    <Page>
      <LogoBar size="10rem" />
      <Container>
        <P color={Color.secondary}>ورود | ثبت‌نام</P>
        <P color={Color.grayDark} fs=".825rem" margin="1rem 0 0 0 ">
          لطفا شماره موبایل یا ایمیل خود را وارد کنید
        </P>
        <Form
          onSubmit={handleSubmit((data) => {
            router.push(`/authy?phone=${data.phone}`);
            const user = JSON.parse(localStorage.getItem("data")).user.filter(
              (va) => va.phone == data.phone
            );
            user.length != 0
              ? router.push(`/authy?phone=${data.phone}`)
              : setError(true);
          })}
          direction="column"
        >
          <InputNumber {...register("phone")} type="text" placeholder="+98" />

          <Send type="submit"> ارسال کد تایید</Send>
          <Error style={{ opacity: error ? 1 : 0 }}>
            شماره مورد نظر در سیستم نمی باشد
          </Error>
        </Form>
      </Container>
    </Page>
  );
};

export default Login;

const Error = styled.p`
  font-size: 0.7rem;
  padding: 1rem 0;
  font-weight: bold;
  color: red;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10rem;

  @media screen and (max-width: 640px) {
    align-items: center;
    width: 100%;
    margin: 0;
    /* margin-top: 50%; */
    /* transform: translateY(-40%); */
    /* max-width: 360px; */

    p {
      width: fit-content;
    }
  }
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
  }
`;
