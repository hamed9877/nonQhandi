import { IDetailProfile } from "@/app/expert/page";
import React from "react";
import styled from "styled-components";
import MemoIdCard from "../../assets/icons/IdCard";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Circle } from "../divitions/Circle";
import { Input } from "../inputs/Input";
import { CardContainer } from "./CardContainer";
import { CardWarrper } from "./CardWarrper";
interface IProfile {
  label: string;
  value: string;
}
interface IProps {
  data: IDetailProfile;
}
export const ProfileCard: React.FC<IProps> = ({ data }) => {
  const list = [
    { label: "نام", value: data.name },
    { label: "نام خانوادگی", value: data.family },
    { label: "کد ملی", value: data.IdCode },
    { label: "جنسیت", value: data.gen },
    { label: "تاریخ تولد", value: data.dateBirth },
    { label: "شماره همراه", value: data.phone },
    { label: "ایمیل", value: data.email },
    { label: "شهر استان", value: data.city },
  ];
  return (
    <BoxContainer index={1}>
      <HeaderProfile>
        <Circle
          as={ProfileImg}
          src="/images/profile.jpeg"
          width="8rem"
          height="8rem"
          right="auto"
          top="-4rem"
          position="absolute"
        />
      </HeaderProfile>
      <div
        style={{
          width: "100%",
          margin: "2rem 0",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {list.map(({ label, value }) => {
          return (
            <ProfileDetail key={label}>
              {/* <IdCard /> */}
              <div style={{ width: "100%" }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    // margin: "-1.25rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </p>
                <Input bg={Color.white} color={Color.gray50} value={value} />
              </div>
            </ProfileDetail>
          );
        })}
      </div>
      <Button radius=".5rem" bg={Color.Primary}>
        <span>ذخیره مشخصات</span>
      </Button>
    </BoxContainer>
  );
};
const ProfileImg = styled.img``;
const HeaderProfile = styled.div`
  width: 100%;
  align-items: center;
  height: 7rem;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;

  background-color: ${Color.Primary};
`;

const BoxContainer = styled(CardContainer)`
  width: fit-content;
  height: fit-content;
  align-items: center;
  margin: 4rem auto;
  border-radius: 0.5rem;
  border: 0.15rem solid #eee;
  position: relative;
  min-width: 480px;
  overflow: visible;
`;

const ProfileDetail = styled(CardWarrper)`
  /* position: relative; */
  /* width: 40%; */
  /* margin: 3rem 0 0 1rem; */
  /* border-radius: 0.5rem; */
  /* border: 0.1rem solid black; */
  /* background-color: ${Color.white}; */
  /* color: #000000; */
  /* margin-top: 2rem; */
  width: 100%;
`;

const IdCard = styled(MemoIdCard)`
  position: absolute;
  padding: 0.25rem;
  top: -1.5rem;
  right: -1.5rem;
  z-index: 1;
  background-color: ${Color.white};
  fill: ${Color.black};
  width: 3rem;
  height: 3rem;
  border: 0.0625rem solid ${Color.grayLight};
  border-radius: 50%;
`;
