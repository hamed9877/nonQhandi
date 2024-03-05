import { BsQrCode } from "react-icons/bs";
import { GoOrganization } from "react-icons/go";
import { LuSettings, LuUsers } from "react-icons/lu";

import { MdOutlineDashboard } from "react-icons/md";
import { Path } from "../routes/Path";

interface IProps {
  width?: string;
  color?: string;
  margin?: string;
}

interface INavItem {
  icon: React.FC<IProps>;
  text: string;
  to: Path;
}

export const navItems: INavItem[] = [
  { text: "داشبورد", icon: MdOutlineDashboard, to: Path.dashboard },
  { text: "کد", icon: BsQrCode, to: Path.qrcScreen },
  { text: "مراکز", icon: GoOrganization, to: Path.center },
  { text: "کاربران", icon: LuUsers, to: Path.users },
  // { text: "پاسخ ها", icon: RiQuestionAnswerLine, to: Path.answer },
  { text: "تنظیمات", icon: LuSettings, to: Path.setting },
];
