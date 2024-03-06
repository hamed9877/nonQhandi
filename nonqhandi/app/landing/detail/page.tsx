"use client";
import useLocalStorage from "@/hooks/useLocal";
import { FaLocationDot, FaTags } from "react-icons/fa6";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import { Comment } from "../../../components/card/Comment";
import { Color } from "../../../styles/global/Color";

const slideImages = [
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
  fontWeight: "bold",
  fontSize: "2.5rem",
};
const spanStyle1 = {
  color: "#ffffff",
  padding: "1rem",
  fontWeight: "bold",
  fontSize: "1.5rem",
};
const divStyle = {
  display: "flex",
  flexDirection: "column",
  direction: "rtl",
  justifyContent: "end",
  backgroundSize: "cover",
  height: "40rem",
};
const divStyle1 = {
  display: "flex",
  flexDirection: "column",
  direction: "rtl",
  justifyContent: "end",
  backgroundSize: "cover",
  width: "40rem",
  borderRadius: "0.5rem",
  height: "30rem",
};
const AddCountry = () => {
  const [{ qrc }, _] = useLocalStorage("data");
  return (
    <Wrapper>
      <HeaderDetail>معرفی مکان تفریحی</HeaderDetail>
      <NewsContent>
        <Right>
          <div>
            <Sujest>دهکده توریستی گنجنامه</Sujest>
            <Label>
              <FaTags color={Color.gold} />
              <b>میراث فرهنگی و گردشگری</b>
            </Label>
            <Label>
              <FaLocationDot color={Color.gold} />
              <b>
                استان همدان، شهر همدان، میدان عباس آباد، خیابان گنجنامه، ضلع
                شرقی میدان گنجنامه
              </b>
            </Label>
            <Pargraph>
              گنج نامه در جنوب غربی شهر همدان در یکی از کوهپایه‌های الوند در
              میان دره‌ای زیبا با مناظر بدیع کوهستانی قرار گرفته‌است از مقتضیعات
              آن آب و هوای خنک در تابستان و باغ‌ها در مسیر دره منتهی به گنجنامه
              است. که بسیار خوش منظره می‌باشد آبشار و کتیبه سنگ نوشته‌ای که
              متعلق به دو تن از شاهان بزرگ هخامنشی یعنی داریوش و خشایارشاه
              می‌باشد ازدیگر آثار دیدنی این محل می‌باشد. گنجنامه، در یکی از
              دامنه‌های کوهستان الوند و به فاصله ۵ کیلومتری جنوب غربی همدان، در
              دوره مصفای عباس‌آباد قرار دارد در نزدیکی گنجنامه، چشم‌انداز زیبایی
              از آبشار گنجنامه و دره‌های سر سبز عباس‌آباد، تاریک دره و کیوارستان
              دیده می‌شود. تاریک دره نیز به دو شاخه تقسیم می‌گردد: در شاخه شرقی
              آن، تأسیسات پیست اسکی تاریک دره احداث شده‌است و در ضلع غربی تاریک
              دره، در خط الراس گردنه (گدوک)، جاده ماشین رو جدید با راه کاروان رو
              قدیمی یکی می‌شود. این دره عصر هخامنشیان، شروع جاده هگمتانه –
              استخر، معروف به “ جاده شاهی“ بوده، که هگمتانه را از طریق پیچ و
              خمهای تاریک دره، گدوک (دره)، ورد آورد علیا، شهرستانه، اشتران به
              تویسرکان، نهاوند، کرمانشاه، لرستان، تخت جمشید و فارس مرتبط
              می‌ساخته‌است. این راه، همچنین یکی از راه‌های ارتباطی همدان به غرب
              و جنوب کشور (ومیانرودان) یا بین‌النهرین (عراق امروزی) بوده‌است. به
              سبب آنکه هگمتانه، پایتخت تابستانی هخامنشیان بوده و در مسیر جاده
              شاهی قرار داشته‌است، داریوش اول هخامنشی پس از اتمام کار سنگ
              نبشه‌های بیستون، دستور نقرکتیبه کنونی گنجنامه را داده‌است. پس از
              او فرزندش خشایار شاه نیز به پیروی از او کتیبه ای در سمت راست و کمی
              پائین‌تر از سنگ نبشته پدر، بر جای گذارده‌است.
            </Pargraph>
          </div>
        </Right>

        <Left>
          <Slide cssClass="slide">
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
            ))}
          </Slide>
          <Img src="/images/map.jpeg" />
          {/* <Map
            width="800"
            height="200"
            center={[25.035085, 55.221437]}
            zoom={17}
          >
            {({ TileLayer, Marker }) => (
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[25.035085, 55.221437]}></Marker>
              </>
            )}
          </Map> */}
        </Left>
      </NewsContent>

      {qrc && (
        <Comment
          title="نظرات کاربران"
          data={qrc[0].comments.map((val) => {
            return {
              comment: val.comment,
              date: "۲۵ دی ۰۲",
              name: val.name,
              srcimage: val.src,
            };
          })}
        />
      )}
    </Wrapper>
  );
};
export default AddCountry;
// export async function getStaticProps() {
//   const data: LayoutSize = {
//     FilterBar: false,
//     isBackVisible: false,
//     padding: "0",
//   };

//   return {
//     props: {
//       ...data,
//     },
//   };
// }
const Right = styled.div`
  margin: 0 0.7rem;
  width: 100%;
`;
const Left = styled.div`
  margin-top: 2rem;
  width: 40rem;
  @media screen and (max-width: 640px) {
    width: calc(100vw - 32px);
  }
`;

const NewsContent = styled.div`
  display: flex;
  justify-content: start;
  padding: 0 2rem;
  gap: 1rem;
  @media screen and (max-width: 640px) {
    padding: 0 1rem;
    flex-direction: column;
  }
`;
const Img = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  margin-top: 1rem;
  object-fit: contain;
`;
const Pargraph = styled.p`
  padding: 1rem;
  font-weight: bold;
  text-align: justify;
  text-justify: inter-word;
  @media screen and (max-width: 640px) {
    padding-right: 0;
  }
`;
const Sujest = styled.h2`
  color: ${Color.Primary};
  margin: 1rem 0;
`;
const Input = styled.input`
  width: 100%;
  border-radius: 0.2rem;
`;
const Lilist = styled.li`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
`;
const HeaderDetail = styled.h1`
  margin: 2rem;
  margin-bottom: 0;
  padding: 1rem 0;
  padding-bottom: 0.5rem;
  color: #870707;
  border-bottom: 1px solid #870707;
`;

const Label = styled.p`
  display: flex;
  margin: 0.5rem 0;

  gap: 0.25rem;
  color: ${Color.grayDark};
  svg {
    font-size: 24px;
  }

  strong {
    color: ${Color.gray50};
    font-size: 24px;
  }
`;
const Wrapper = styled.div`
  padding: 2rem;
  width: 100%;
  @media screen and (max-width: 640px) {
    padding: 0;
    margin-top: 2rem;
  }
`;
