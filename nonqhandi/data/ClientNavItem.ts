import { AiOutlineScan } from "react-icons/ai";
import { BsQrCode } from "react-icons/bs";
import { LuSettings, LuUsers } from "react-icons/lu";
import { Path } from "./../routes/Path";
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

export const ClientNavItem: INavItem[] = [
  { icon: LuUsers, text: "پروفایل", to: Path.expertProfile },
  { icon: AiOutlineScan, text: "اسکن", to: Path.expertScan },
  { icon: BsQrCode, text: "کد", to: Path.expertCode },
  { icon: LuSettings, text: "تنظیمات", to: Path.settingProfile },
];
