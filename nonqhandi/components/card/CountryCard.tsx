import MemoAdd from "../../assets/icons/Add";
import MemoEdit from "../../assets/icons/Edit";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { AddBtn } from "../buttons/AddBtn";
import { CountryList } from "../divitions/CountryList";
import { Img } from "../divitions/Img";
import { MapWarrper } from "../divitions/MappWarrper";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";

export const CountryCard = () => {
  return (
    <CardContainer
      margin="0"
      direction="row"
      padding="0"
      border={`0.0625rem solid ${Color.Primary}`}
      raduis="0 1.5rem 1.5rem 0"
    >
      <MemoEdit width="2rem" margin="1rem " fill="red" />
      <CountryList />
      <MapWarrper>
        <AddBtn href={Path.addCountry} bgHover={Color.white}>
          <MemoAdd width="2.5rem" />
        </AddBtn>
        <Img
          src="/images/map.jpeg"
          width="100%"
          height="85%"
          borderRadius="2rem"
        />
        <P color={Color.white} aling="center" margin="1rem 0 0 0">
          ایران
        </P>
      </MapWarrper>
    </CardContainer>
  );
};
