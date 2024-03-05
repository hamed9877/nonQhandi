"use client";
import { default as Styled, default as styled } from "styled-components";
import { CardContainer } from "../../../components/card/CardContainer";
import { CodeCard } from "../../../components/card/CodeCard";
import { P } from "../../../components/paragraphs/P";
import { Color } from "../../../styles/global/Color";

const Code = () => {
  return (
    <Wrapper>
      <CodeCard />
      <CodeCard />
      <CodeCard />
      <CodeCard />
      <CodeCard />
    </Wrapper>
  );
};
export default Code;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
`;
const Heade = Styled(CardContainer)`
    height:4rem;
    background-color:${Color.Primary};
 `;
const Th = Styled(P)`
  color: ${Color.white};
  text-align: center;
  width:22%;
  font-size: 0.875rem;
`;
