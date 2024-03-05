import Link from "next/link";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import MemoDelete from "../../assets/icons/Delete";
import MemoDrag from "../../assets/icons/drag";
import MemoEdite from "../../assets/icons/Edite";
import { QuestionsItem } from "../../data/fake/QuestionsItem";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { MainWrapper } from "../divitions/MainWarrper";
import { Number } from "../paragraphs/Number";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";
import { CardWarrper } from "./CardWarrper";

export const QuestionsListCard: React.FC = () => {
  const [questions, updateQuestions] = useState(QuestionsItem);

  const handleOnDragEnd = (result) => {
    const [reorderedItem] = questions.splice(result.source.index, 1);
    questions.splice(result.destination.index, 0, reorderedItem);
    updateQuestions(questions);
  };

  return (
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
                  <QuestionCard
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    maxwidth="100%"
                  >
                    <Number>{index + 1}</Number>
                    <CardWarrper direction="column">
                      <P fs="0.875rem" color={Color.black}>
                        {question.text}
                      </P>
                    </CardWarrper>
                    <Link href="#">
                      <a>
                        <MemoEdite fill={Color.grayDark} />
                      </a>
                    </Link>
                    <Button hoverColor="transparent" margin="0" padding="0">
                      <MemoDelete fill={Color.grayDark} />
                    </Button>
                    <Button
                      hoverColor="transparent"
                      {...provided.dragHandleProps}
                      margin="0"
                      padding="0"
                    >
                      <MemoDrag fill={Color.grayDark} />
                    </Button>
                  </QuestionCard>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </Questions>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const Questions = styled(MainWrapper)`
  height: auto;
  width: 100%;
`;

const QuestionCard = styled(CardContainer)`
  flex-direction: row;

  height: auto;
  border-radius: 0.5rem 0 0 0.5rem;
  align-items: center;
  border: 1px solid ${Color.grayLight};
  border-right: 2px solid orangered;

  background-color: ${Color.background};
`;
