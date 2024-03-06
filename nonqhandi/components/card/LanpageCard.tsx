import styled from "styled-components";
import { Shadow } from "../../styles/global/Shadow";
import { CardContainer } from "./CardContainer";

interface Props {
  imageSrc: string;
  text: string;
  onClick?: () => void;
}
export const LanPageCard: React.FC<Props> = ({ onClick, text, imageSrc }) => {
  return (
    <CardContainerr index={1} onClick={onClick}>
      <ContainImage src={imageSrc} />
      <Text>{text}</Text>
    </CardContainerr>
  );
};
const Text = styled.p`
  padding: 1rem 0 0 0;
  font-size: 1rem;
  font-weight: bold;
`;
const ContainImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  height: 90%;
  transition: all 0.3s ease-in-out;
  :hover {
    filter: brightness(0.8);
  }
`;
const CardContainerr = styled(CardContainer)`
  border-radius: 0.5rem;
  height: 18rem;
  display: flex;
  margin: 0.5rem;
  padding: 1rem;
  box-shadow: ${Shadow.cardShadow};
  background: white;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    scale: 1.02;
  }
`;
