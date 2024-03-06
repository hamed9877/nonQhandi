import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaMosque } from "react-icons/fa6";
import { IoRestaurantSharp } from "react-icons/io5";
import { RiHotelFill } from "react-icons/ri";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { Button } from "../../components/buttons/Button";
import { CardContainer } from "../../components/card/CardContainer";
import { LanPageCard } from "../../components/card/LanpageCard";
import { Input } from "../../components/inputs/Input";
import { Color } from "../../styles/global/Color";

const slideImages = [
  {
    url: "/images/4.jpeg",
    caption: "میدان امام",
    comment: " عروس زیبای همدان",
  },
  {
    url: "/images/aramga.jpg",
    caption: "آرامگاه بوعلی",
    comment: "آرامگاه حکیم هزاره ها فخر باتخت تاریخ و تمدن ایران",
  },
  {
    url: "/images/chshmeh.jpg",
    caption: "سراب گیان",
    comment: "چشمه بر آب غرب ایران",
  },
  {
    url: "/images/alvand.jpg",
    caption: "کوه الوند",
    comment: " عروس زیبای همدان",
  },
];
const spanStyle = {
  color: "#ffffff",
  padding: "1rem",
  paddingBottom: 0,
  fontWeight: "bold",
  fontSize: "2rem",
};
const spanStyle1 = {
  color: "#ffffff",
  padding: "1rem",
  paddingTop: 0,
  fontWeight: "bold",
  fontSize: "1rem",
};
const divStyle = {
  display: "flex",
  flexDirection: "column",
  direction: "rtl",
  justifyContent: "end",
  backgroundSize: "cover",
  height: "30rem",
  width: "100%",
};
const divStyle1 = {
  display: "flex",
  flexDirection: "column",
  direction: "rtl",
  justifyContent: "end",
  backgroundSize: "cover",
  width: "45rem",
  height: "20rem",
};
const dataFake = [
  {
    q: "رستوران خوب کجا بریم",
    r: "کافه کارن",
  },
  {
    q: "آدرس",
    r: " همدان خیابان بو علی سینا مرکز خرید شهرآرا",
  },
  {
    q: "الان",
    r: "حتما با قالی پلو با گوشت گردن ",
  },
  {
    q: "بهترین",
    r: "کافه گالری شب های روشن",
  },
];
const Landing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();
  const router = useRouter();
  return (
    <Wrapper>
      <SliderWrapper>
        <Slide autoplay duration={1000} arrows={false}>
          {slideImages.map((slideImage, index) => (
            <div>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(360deg, #000000db, transparent)",
                    width: "",
                  }}
                >
                  <p style={spanStyle}>{slideImage.caption}</p>
                  <p style={spanStyle1}>{slideImage.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </SliderWrapper>
      <Content>
        <HeaderLanPage>به همدان خوش آمدید</HeaderLanPage>
        <HeaderItem>ما به شما کمک می کنیم تا سفر جذابی داشته باشید</HeaderItem>
        <ContentLan>
          <LanPageCard
            onClick={() => router.push("guest/detail")}
            imageSrc={"/images/abas.webp"}
            text="تپه عباس آباد"
          />
          <LanPageCard
            onClick={() => router.push("guest/detail")}
            imageSrc={"/images/cave.jpg"}
            text="غار علی صدر"
          />
          <LanPageCard
            onClick={() => router.push("guest/detail")}
            imageSrc={"/images/abshargangnameh.jpg"}
            text="آبشاز گنجنامه"
          />
          <LanPageCard
            onClick={() => router.push("guest/detail")}
            imageSrc={"/images/babather.jpg"}
            text="آرامگاه باباطاهر"
          />
          <LanPageCard
            onClick={() => router.push("guest/detail")}
            imageSrc={"/images/rangincamn.jpeg"}
            text="شهربازی رنگین کمان"
          />
          <LanPageCard
            onClick={() => {
              router.push("guest/detail");
            }}
            imageSrc={"/images/shirsangi.jpeg"}
            text="مجسمه شیرسنگی"
          />
        </ContentLan>

        <Sujest>
          <HeaderLanPage>پیشنهاد ما</HeaderLanPage>
          <HeaderItem>
            ما به شما کمک می کنیم تا سفر جذابی داشته باشید
          </HeaderItem>
          <CardContainer index={0}>
            <form
              onSubmit={handleSubmit((data) => {
                setLoader(true);
                const timer = setTimeout(() => {
                  setLoader(false);
                }, 1000); // 1000 milliseconds = 1 second

                if (data.text && data.text.includes("رستوران")) {
                  setData(dataFake[0].r);
                }
                if (data.text && data.text.includes("آدرس")) {
                  setData(dataFake[1].r);
                }
                if (data.text && data.text.includes("الان")) {
                  setData(dataFake[2].r);
                }
                if (data.text && data.text.includes("بهترین")) {
                  setData(dataFake[3].r);
                }
              })}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "2rem",
                width: "100%",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <Pargraph>چی میخوای، برامون تایپ کن؟</Pargraph>
                <Send type="submit">بزن بریم</Send>
              </div>
              <CInput {...register("text")} padding="12px" bg="transparent" />
              {loader ? <p>کمی صبر کنید</p> : data && <p>{data}</p>}
            </form>
            <BoxRes>
              <ResItem>
                <IoRestaurantSharp />
                <p>روستوران نزدیک به شما</p>
              </ResItem>

              <ResItem>
                <RiHotelFill />
                <p>اقامتگاه‌های نزدیک به شما</p>
              </ResItem>

              <ResItem>
                <FaMosque />
                <p>مکان‌ها تفریحی و گردشگری</p>
              </ResItem>
            </BoxRes>
          </CardContainer>
        </Sujest>
        <News>
          <HeaderLanPage>اخبار گردشگری</HeaderLanPage>
          <HeaderItem>آخرین خبر‌های انتشار شده در حوزه گردشگری</HeaderItem>
          <NewsContent index={0}>
            <Left>
              <ItemNews>
                <Lilist>گردشگری ورزشی در دستور کار شهرداری </Lilist>
                <Lilist> بزرگداشت روز جهانی صنایع دستی در کیش</Lilist>
                <Lilist>افزایش پروازها به مقصد همدان در ایام تابستان</Lilist>
                <Lilist>ایجاد “رویدادهای پایدار جدید” در همدان</Lilist>
                <Lilist>افزایش پروازها به مقصد همدان در ایام تابستان</Lilist>
                <Lilist>تجلیل از هنرمندان منتخب حوزه صنایع دستی کیش</Lilist>
              </ItemNews>
            </Left>
            <Right>
              <Slide autoplay={false} cssClass="slide">
                {slideImages.map((slideImage, index) => (
                  <div key={index}>
                    <div
                      style={{
                        ...divStyle1,
                        backgroundImage: `url(${slideImage.url})`,
                      }}
                    >
                      {/* <div style={{ background: "rgb(0,0,0,0.4)", width: "" }}>
                        <p style={spanStyle}>{slideImage.caption}</p>
                        <p style={spanStyle1}>{slideImage.comment}</p>
                      </div> */}
                    </div>
                  </div>
                ))}{" "}
              </Slide>
              {/* <Img src="images/Gamasiab_sarab.jpg" /> */}
            </Right>
          </NewsContent>
        </News>
      </Content>
    </Wrapper>
  );
};
export default Landing;

const Wrapper = styled.div`
  width: 100vw;
`;

const SliderWrapper = styled.div`
  width: 86%;
  /* height: 50vh; */
  margin: 6rem auto;
  margin-bottom: 0;
  border-radius: 1rem;
  overflow: hidden;
  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;

const BoxRes = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-radius: 0.5rem;
  padding: 2rem;
  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
  }
`;
const Send = styled(Button)`
  color: ${Color.white};
  background-color: ${Color.secondary};
  width: 10rem;
  margin: 0;
  border-radius: 0.5rem;
`;
const Pargraph = styled.p`
  white-space: nowrap;
  padding: 0 0 0 1rem;
  font-weight: bold;
`;
const Sujest = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 1rem;
`;
const CInput = styled(Input)`
  width: 100%;
  border-radius: 0.2rem;
  color: ${Color.grayDark};
  transition: all 0.3s ease;
  &:active,
  &:focus {
    border-color: ${Color.grayDark};
  }
`;
const Lilist = styled.li`
  width: 100%;
`;
const Content = styled.div`
  display: flex;
  width: 100%;
  /* background: #fafafa; */
  flex-direction: column;
  padding: 4rem;
  /* padding-top: 0; */
  align-items: center;
  @media screen and (max-width: 640px) {
    padding: 1.5rem;
  }
`;
const News = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const ContentLan = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  width: 100%;
  gap: 1.5rem;
  row-gap: 0.5rem;
`;
const NewsContent = styled(CardContainer)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  @media screen and (max-width: 640px) {
  }
`;
const HeaderLanPage = styled.h1`
  text-align: center;
  padding: 1rem;
  position: relative;
  &:before {
    position: absolute;
    bottom: 0rem;
    content: "";
    display: block;
    width: 10rem;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    border-radius: 2px;
    background: ${Color.gold};
  }
`;

const HeaderItem = styled.h4`
  padding: 1rem;
`;
const HeaderNews = styled.h2`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const ItemNews = styled.ul`
  display: flex;
  margin-right: 2rem;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
`;
const Right = styled.div`
  flex: 5;
  padding: 1rem;
  width: 20rem;
`;
const Left = styled.div`
  flex: 4;
  display: flex;
`;

const ResItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  svg {
    background-color: ${Color.Primary};
    color: ${Color.white};
    padding: 1rem;
    border-radius: 50%;
    font-size: 6rem;
  }
`;
