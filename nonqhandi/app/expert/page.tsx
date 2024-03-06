"use client";
import { ProfileCard } from "../../components/card/ProfileCard";

import { LayoutSize } from "../../interface/LayoutSize";

export interface IDetailProfile {
  name: string;
  family: string;
  phone: string;
  IdCode: string;
  gen: string;
  dateBirth: string;
  city: string;
  email: string;
}
export const Profile = () => {
  const detailprofile: IDetailProfile = {
    name: "رضا",
    family: "قاسمی",
    city: "ّهمدان-همدان",
    IdCode: "404023562",
    dateBirth: "1350/02/30",
    email: "rezaghasim@gmail.com",
    gen: "مرد",
    phone: "09183152665",
  };

  return (
    <>
      <ProfileCard data={detailprofile} />
    </>
  );
};

export default Profile;

Profile.getInitialProps = async () => {
  const data: LayoutSize = {
    padding: "0",
  };

  return {
    props: {
      ...data,
    },
  };
};
