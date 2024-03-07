import { formatDate } from "@/functions/dateFormat";
import useLocalStorage from "@/hooks/useLocal";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Input } from "../inputs/Input";
import { TextArea } from "../inputs/TextArea";
import { CardContainer } from "./CardContainer";
import { firstData } from "@/app/page";

interface Props {
  title: string;
  data: {
    srcimage: string;
    date: string;
    name: string;
    comment: string;
  }[];
}
export const Comment: React.FC<Props> = ({ data, title }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const search = useSearchParams();
  const id = search.get("id");

  const [{ qrc }, setData] = useLocalStorage("data", firstData);
  const qrcData = qrc.find(({ id: _id }) => _id === id);

  return (
    <ContainerComment index={0}>
      <Title>{title}</Title>
      {qrcData?.comments.map(({ comment, date, src, name }) => {
        return (
          <CommnetBox key={name}>
            <ImgBox>
              <ImdPro src={src} />
            </ImgBox>
            <Prof>
              <div>
                <NameCom>{name}</NameCom>
                <DateCom>{date || "۲۵ دی ۰۲"} </DateCom>
              </div>
              <Pargraoh>{comment}</Pargraoh>
            </Prof>
          </CommnetBox>
        );
      })}
      <form
        onSubmit={handleSubmit((data) => {
          if (data.comment) {
            const target = qrc.find(({ id: _id }) => _id == id);
            const currentDate = new Date();
            const newQrc = [
              {
                ...target,
                comments: [
                  { ...data, date: formatDate(currentDate) },
                  ...target?.comments,
                ],
              },
              ...qrc.filter(({ id: _id }) => _id !== id),
            ];
            setData("data.qrc", newQrc);
            reset();
          }
        })}
        style={{ width: "100%" }}
      >
        <TextArea
          {...register("comment")}
          placeholder="توضیحات خود را وارد کنید..."
        />
        <BoxName>
          <CInput
            {...register("name", { required: true })}
            placeholder="نام خود را وارد کنید"
            bg="transparent"
          />
          <Button type="submit" bg={Color.Primary} radius=".5rem">
            ثبت نظر
          </Button>
        </BoxName>
      </form>
    </ContainerComment>
  );
};
const Title = styled.h2`
  color: #f36666;
  font-weight: bold;
  width: 100%;
`;
const CInput = styled(Input)`
  width: 40%;
`;
const BoxName = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
    input {
      width: 100%;
    }
    button {
      width: 100%;
    }
  }
`;
const Pname = styled.p`
  border-radius: 50%;
  white-space: nowrap;
  padding: 0 0.5rem;
`;
const ContainerComment = styled(CardContainer)`
  width: calc(100% - 68px);
  height: fit-content;
  overflow: hidden;
  border-radius: 0.5rem;
  display: flex;
  margin: 1rem 2.25rem;
  margin-top: 4rem;
  padding: 1rem;
  background: white;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  @media screen and (max-width: 640px) {
    margin: 1rem;
    width: calc(100% - 36px);
  }
`;
const ImdPro = styled.img`
  width: 3rem;
  height: 3rem;
  border: 1px solid ${Color.Primary};

  border-radius: 6rem;
  object-fit: cover;
`;
const Prof = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameCom = styled.p`
  font-size: 1.1rem;
  padding: 0.2rem 0;
  font-weight: bold;
`;
const DateCom = styled.p`
  font-size: 0.7rem;
  color: #8b8888;
`;
const Pargraoh = styled.p``;
const ImgBox = styled.div`
  width: 5rem;
  justify-content: center;
  display: flex;
`;
const CommnetBox = styled.div`
  padding: 1rem 0 0.5rem 0;
  display: flex;
  width: 100%;
  /* margin: 1rem 0; */
  border-top: 0.1rem solid ${Color.gray};
  &:first-of-type {
    border: none;
  }
`;
