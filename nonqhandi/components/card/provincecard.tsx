import Link from "next/link";
import MemoAdd from "../../assets/icons/Add";
// import MemoEdit from "../../assets/icons/Edit";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { AddBtn } from "../buttons/AddBtn";
import { Img } from "../divitions/Img";
import { MapWarrper } from "../divitions/MappWarrper";
import { ProvinceList } from "../divitions/ProvinceList";
import { P } from "../paragraphs/P";
import { CardContainer } from "./CardContainer";

const ProvinceCard = () => {
  return (
    <CardContainer margin="0" direction="row" padding="0">
      {/* <MemoEdit width="2rem" margin="1rem " fill="red" /> */}
      <ProvinceList />
      <MapWarrper>
        <Link href={Path.addProvince}>
          <AddBtn bgHover={Color.white}>
            <MemoAdd width="2rem" />
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
        <P color={Color.white} aling="center" margin=".5rem 0 0 0">
          همدان
        </P>
      </MapWarrper>
    </CardContainer>
  );
};
export default ProvinceCard;
