"use client";
import { PageHeader } from "@/components/PageHeader";
import Skeleton from "@/components/Skeleton";
import { Card } from "@/components/card/Card";
import useLocalStorage from "@/hooks/useLocal";
import { UserData } from "@/interface/Data";
import { Color } from "@/styles/global/Color";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import "../styles/globals.css";
import Login from "./login/page";

export const firstData: UserData = {
  user: [
    {
      role: "Expert",
      phone: "09183152961",
      name: "فرهاد",
      family: "فرهادی",
      gen: "man",
      idCode: "4040298763",
      date: "1350/02/13",
      email: "reza@gamil.com",
      city: "همدان",
    },
    {
      role: "Admin",
      phone: "09185005315",
      name: "ایمان",
      family: "رضایی",
      gen: "man",
      idCode: "4042298763",
      date: "1390/02/13",
      email: "imanrezs@gamil.com",
      city: "همدان",
    },
  ],
  qrc: [
    {
      comments: [
        { name: "ایمان رضایی", comment: "خیلی خوش گذشت خیلی دوست دارم" },
        { name: "ds", comment: "asd", src: "/images/profile.jpeg" },
        { name: "sdd", comment: "dasd", src: "/images/profile.jpeg" },
        { name: "dsa", comment: "dasd", src: "/images/profile.jpeg" },
      ],
      id: "1",
      org: "محیط زیست",
      title: "دهکده توریستی گنجنامه",
      subject: "میراث فرهنگی و گردشگر",
      address:
        " استان همدان، شهر همدان، میدان عباس آباد، خیابان گنجنامه، ضلع شرقی میدان گنجنامه",
      tag: "فرهنگی",
    },
    {
      id: "2",
      org: "محیط زیست",
      title: "دهکده توریستی گنجنامه",
      subject: "میراث فرهنگی و گردشگر",
      address:
        " استان همدان، شهر همدان، میدان عباس آباد، خیابان گنجنامه، ضلع شرقی میدان گنجنامه",
      comments: [
        { name: "ایمان رضایی", comment: "خیلی خوش گذشت خیلی دوست دارم" },
      ],
      tag: "فرهنگی",
    },
  ],
  dashboard: [
    [
      {
        name: "غار علیصدر",
        request: "15",
        amt: "2400",
      },
      {
        name: "برج قربان",
        request: "32",
        amt: "2400",
      },
      {
        name: "گنبد علویان",
        request: "23",
        amt: "2400",
      },
      {
        name: "دشت میشان",
        request: "42",
        amt: "2400",
      },
      {
        name: "هگمتانه",
        request: "12",
        amt: "2400",
      },
      {
        name: "سراب گیان",
        request: "73",
        amt: "2400",
      },
      {
        name: "گنج نامه",
        request: "45",
        amt: "2400",
      },
      {
        name: "باباطاهره",
        request: "34",
        amt: "2400",
      },
    ],
    [
      {
        name: "فرودین",
        request: "15",
        amt: "2400",
      },
      {
        name: "اردیبهشت",
        request: "32",
        amt: "2400",
      },
      {
        name: "خرداد",
        request: "23",
        amt: "2400",
      },
      {
        name: "تیر",
        request: "42",
        amt: "2400",
      },
      {
        name: "مرداد",
        request: "12",
        amt: "2400",
      },
      {
        name: "شهریور",
        request: "73",
        amt: "2400",
      },
      {
        name: "مهر",
        request: "45",
        amt: "2400",
      },
      {
        name: "آبان",
        request: "34",
        amt: "2400",
      },
      {
        name: "آذر",
        request: "73",
        amt: "2400",
      },
      {
        name: "دی",
        request: "45",
        amt: "2400",
      },
      {
        name: "بهمن",
        request: "34",
        amt: "2400",
      },
      {
        name: "اسفند",
        request: "34",
        amt: "2400",
      },
    ],
  ],
};
export default function Home({}) {
  const pathname = usePathname();
  const [userData, setUserData] = useLocalStorage("data", firstData);

  return pathname === "/login" ? (
    <Login />
  ) : (
    <>
      <PageHeader title="کدهای QRC" buttonLabel="افزودن کد" />
      <Wrapper>
        {!userData.qrc?.length ? (
          <>
            <Skeleton width={"100%"} height={300} />
            <Skeleton width={"100%"} height={300} />
            <Skeleton width={"100%"} height={300} />
            <Skeleton width={"100%"} height={300} />
          </>
        ) : (
          userData.qrc?.map((i, index) => (
            <Card
              key={index}
              barcode={i.id}
              onClick={() => {
                setUserData(
                  "data.qrc",
                  userData.qrc.filter(({ id: _id }) => _id != i.id)
                );
              }}
              Idata={{
                id: i.id,
                address: i.address,
                subject: i.subject,
                title: i.title,
              }}
              index={0}
            />
          ))
        )}
      </Wrapper>
    </>
  );
}

const H3 = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Color.grayDark};
  border-bottom: 3px solid ${Color.gold};
  padding-left: 1rem;
  padding-bottom: 0.25rem;
  svg {
    transform: rotateY(180deg);
    color: ${Color.gold};
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  row-gap: 1rem;
  padding: 0.25rem;
`;
