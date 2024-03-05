import React from "react";
import styled from "styled-components";
import { IStatus } from "../../data/fake/StatusItem";
import { Color } from "../../styles/global/Color";
import { P } from "../paragraphs/P";

interface ICardStatus {
  data: IStatus[];
}

const CardStatus: React.FC<ICardStatus> = ({ data }) => {
  return (
    <StatusWrapper>
      {data.map((item) => (
        <Status>
          <item.icon width="2rem" margin="0 0.25rem" fill={Color.white} />
          <P color={Color.white} fs="0.625rem">
            {item.text}
          </P>
        </Status>
      ))}
    </StatusWrapper>
  );
};

export default CardStatus;

export const StatusWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: end;
  bottom: 0.5rem;
  transform: translateY(50%);
  padding: 0.5rem;
  width: 100%;
  gap: 0.5rem;
`;

const Status = styled.div`
  display: flex;
  gap: 0.25rem;
  background-color: ${Color.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
`;
