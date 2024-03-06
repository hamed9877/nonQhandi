import Link from "next/link";
import { FC } from "react";
import { LuList } from "react-icons/lu";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";
import { Button } from "../components/buttons/Button";
import { FillterBtnWarrper } from "../components/divitions/FillterBtnWarrper";
import { Path } from "../routes/Path";
import { Color } from "../styles/global/Color";

interface IProps {
  title: string;
  buttonLabel?: string;
  onClick?: () => void;
}
export const PageHeader: FC<IProps> = ({ title, buttonLabel, onClick }) => (
  <Wrapper>
    <H3>
      <LuList />
      {title}
    </H3>
    <FillterBtnWarrper>
      {/* <Button radius=".5rem" bg={Color.secondary}>
    <MemoSort />
    <span>مرتب سازی</span>
  </Button> */}

      {buttonLabel && (
        <Link href={Path.addQrc}>
          <Button
            onClick={onClick}
            padding=".25rem 1rem"
            isOutlined
            radius=".5rem"
          >
            <MdAdd />
            <span>{buttonLabel}</span>
          </Button>
        </Link>
      )}
    </FillterBtnWarrper>
  </Wrapper>
);

const H3 = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Color.grayDark};
  border-bottom: 3px solid ${Color.gold};
  padding-left: 1rem;
  padding-bottom: 0.25rem;
  svg {
    transform: rotateY(180deg);
    color: ${Color.gold};
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;
