import Link from "next/link";
import MemoAdd from "../../assets/icons/Add";
import MemoEdite from "../../assets/icons/Edite";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { AddBtn } from "../buttons/AddBtn";
import { CityList } from "../divitions/CityList";
import { Img } from "../divitions/Img";
import { MapWarrper } from "../divitions/MappWarrper";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";

const CityCard = () => {
  return (
    <CardContainer index={1} width="80%" height="90%" padding="0" margin="auto">
      <MemoEdite width="2rem" margin="1rem " fill="red" />
      <CityList />
      <MapWarrper>
        <Link href={Path.addCity}>
          <AddBtn bgHover={Color.white}>
            <MemoAdd width="2.5rem" />
          </AddBtn>
        </Link>
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
export default CityCard;
