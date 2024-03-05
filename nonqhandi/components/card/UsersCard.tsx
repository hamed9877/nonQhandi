import { useEffect, useState } from "react";
import { FaAddressCard, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import ToggleBtn from "../buttons/Toggle";
import { Img } from "../divitions/Img";
import { CardContainer } from "./CardContainer";
import { CardWarrper } from "./CardWarrper";

const UsersCard = () => {
  const [data, useData] = useState({});
  useEffect(() => {
    useData(JSON.parse(localStorage.getItem("data")).user[1]);
  }, []);

  return (
    <CardContainer
      height="auto"
      direction="row"
      maxwidth="auto"
      border="none!important"
      raduis=".5rem"
      align="center"
      bg="#d3e6c9"
      index={0}
    >
      <CardWarrper>
        <Img borderRadius="50%" src="/images/profile.png" />
        <UserInfo> {data?.name + " " + data?.family}</UserInfo>
      </CardWarrper>
      <CardWarrper>
        <FaAddressCard />
        <UserInfo>{data.idCode}</UserInfo>
      </CardWarrper>
      <CardWarrper>
        <FaPhone />
        <UserInfo>{data.phone}</UserInfo>
      </CardWarrper>
      <CardWarrper>
        <MdEmail />
        <UserInfo>{data.email}</UserInfo>
      </CardWarrper>

      <CardWarrper width="15rem">
        <ToggleBtn alignItems="center" left="2.5rem" />
      </CardWarrper>
    </CardContainer>
  );
};
export default UsersCard;

const UserInfo = styled.p`
  font-size: 0.875rem;
  margin-right: 0.2rem;
  color: ${Color.grayDark};
`;
