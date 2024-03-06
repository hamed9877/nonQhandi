import useLocalStorage from "@/hooks/useLocal";
import { useSearchParams } from "next/navigation";
import QRCode from "qrcode.react";
import { useRef, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { QuestionsItem } from "../../data/fake/QuestionsItem";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Img } from "../divitions/Img";
import { MainWrapper } from "../divitions/MainWarrper";
import QrcInfo from "../functions/QrcInfo";
import { H2 } from "../paragraphs/H2";
import { CardContainer } from "./CardContainer";

const QrcDetailCard = () => {
  const search = useSearchParams();
  const [questions, updateQuestions] = useState(QuestionsItem);
  const qrCodeRef = useRef(null);

  const handleOnDragEnd = (result) => {
    const [reorderedItem] = questions.splice(result.source.index, 1);
    questions.splice(result.destination.index, 0, reorderedItem);
    updateQuestions(questions);
  };

  const [data, setData] = useLocalStorage("data");
  const qrc = data.qrc.find((d) => d.id == search.get("id"));

  return (
    <CardContainer
      index={1}
      border="none!important"
      maxwidth="auto"
      padding="0"
      margin="0"
    >
      <QrcDetail>
        <QRCode ref={qrCodeRef} value={"www.google.com"} />

        <QrcInfo data={qrc} />
      </QrcDetail>

      <MainContent>
        <QuestionWrapper>
          <H2>سوالات</H2>

          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <Questions
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="droppable"
                >
                  {questions.map((question, index) => (
                    <Draggable
                      key={question.id}
                      draggableId={question.id}
                      index={index}
                    >
                      {(provided) => (
                        <CardContainer
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          direction="row"
                          maxwidth="100%"
                          height="auto"
                          raduis=".5rem 0 0 .5rem "
                          align="center"
                        >
                          <Button
                            hoverColor="transparent"
                            {...provided.dragHandleProps}
                            margin="0"
                            padding="0"
                          ></Button>
                        </CardContainer>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Questions>
              )}
            </Droppable>
          </DragDropContext>
        </QuestionWrapper>

        <FileWrapper>
          <H2>عکس ها</H2>
          <Images>
            <ImgCard>
              <Img
                borderRadius=".5rem"
                width="4rem"
                height="4rem"
                src="./images/map.jpeg"
              />
              <span>img205.jpg</span>
            </ImgCard>
            <ImgCard>
              <Img
                borderRadius=".5rem"
                width="4rem"
                height="4rem"
                src="./images/map.jpeg"
              />
              <span>img205.jpg</span>
            </ImgCard>
            <ImgCard>
              <Img
                borderRadius=".5rem"
                width="4rem"
                height="4rem"
                src="./images/map.jpeg"
              />
              <span>img205.jpg</span>
            </ImgCard>
          </Images>
          <H2>فایل ها</H2>
          <Files>
            <FileCard>
              <Img
                borderRadius=".5rem"
                width="4rem"
                height="4rem"
                src="./images/folder.svg"
              />
              <span>code</span>
            </FileCard>{" "}
            <FileCard>
              <Img
                borderRadius=".5rem"
                width="4rem"
                height="4rem"
                src="./images/folder.svg"
              />
              <span>code</span>
            </FileCard>{" "}
            <FileCard>
              <Img
                borderRadius=".5rem"
                width="4rem"
                height="4rem"
                src="./images/folder.svg"
              />
              <span>code</span>
            </FileCard>
          </Files>
        </FileWrapper>
      </MainContent>
    </CardContainer>
  );
};

export default QrcDetailCard;

const QrcDetail = styled.div`
  border: 1px solid ${Color.grayLight};
  border-radius: 0 0.5rem 0.5rem 0;

  display: flex;

  margin-bottom: 0.5rem;
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const QuestionWrapper = styled.div`
  flex: 0 0 70%;
  display: flex;
  flex-direction: column;
  height: auto;
`;
const Questions = styled(MainWrapper)`
  background-color: #d3e6ca;
  height: auto;
  width: 100%;

  padding: 0.5rem;
  margin-top: 0.5rem;

  border: 2px solid ${Color.grayLight};
  border-radius: 0.5rem;
`;

const FileWrapper = styled.div`
  flex: 0 0 29%;
  margin-right: 1rem;
`;

const Images = styled(Questions)`
  margin-bottom: 1rem;
`;

const ImgCard = styled.div`
  direction: ltr;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${Color.white};

  border: 1px solid ${Color.grayLight};
  border-radius: 0.5rem;

  padding: 0.5rem;
  &:not(:first-child) {
    margin-top: 0.5rem;
  }

  span {
    margin-left: 0.5rem;
    color: ${Color.grayDark};
  }
`;

const Files = styled(Images)``;

const FileCard = styled(ImgCard)``;
