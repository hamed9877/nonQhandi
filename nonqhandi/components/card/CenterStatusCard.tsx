import React from "react";
import styled from "styled-components";
import { IStatus } from "../../data/fake/StatusItem";
import { Color } from "../../styles/global/Color";
import { P } from "../paragraphs/P";

interface ICardStatus {
  data: IStatus[];
}

const CenterStatus: React.FC<ICardStatus> = ({ data }) => {
  return (
    <StatusWrapper>
      {data.map((item) => (
        <Status>
          <item.icon width="1.5rem" margin="0 0.25rem" fill={Color.secondary} />
          <P color={Color.secondary} fs="11px">
            {item.text}
          </P>
        </Status>
      ))}
    </StatusWrapper>
  );
};

export default CenterStatus;

export const StatusWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  background-color: #01866750;
  padding: 0.5rem;
  border-top: 1px solid ${Color.grayLight};
  border-bottom: 1px solid ${Color.grayLight};
`;

const Status = styled(StatusWrapper)`
  color: ${Color.secondary};
  flex: 0 0 auto;
  flex-wrap: nowrap;
  padding: 0;
  border: 0;
  background-color: transparent;
  &:last-child {
    margin-top: 0.5rem;
  }
  &:first-child {
    width: 50%;
  }
`;
