import styled from "styled-components";
import { Shadow } from "../../styles/global/Shadow";
import { CardContainer } from "./CardContainer";

interface Props {
  imageSrc: string;
  text: string[][];
  onClick?: () => void;
}
export const LanpageCardRecom: React.FC<Props> = ({
  onClick,
  text,
  imageSrc,
}) => {
  return (
    <CardContainerr index={1} onClick={onClick}>
      <ContainImage src={imageSrc} />
      {text.map((val) => {
        return (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {val.map((t) => (
              <Text>{t}</Text>
            ))}
          </div>
        );
      })}
    </CardContainerr>
  );
};
const Text = styled.p`
  padding: 0.3rem;
  font-size: 0.7rem;
  white-space: nowrap;
  font-weight: lighter;
`;
const ContainImage = styled.img`
  width: 35%;
  border-radius: 0.5rem;
  height: 100%;
  transition: all 0.3s ease-in-out;
  :hover {
    filter: brightness(0.8);
  }
`;
const CardContainerr = styled(CardContainer)`
  border-radius: 0.5rem;
  display: flex;
  height: 6rem;
  flex-direction: row;
  padding: 0.4rem;
  box-shadow: ${Shadow.cardShadow};
  background: white;
  font-size: 0.875rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
`;
