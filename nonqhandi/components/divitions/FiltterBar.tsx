import React from "react";
import MemoAddIcon from "../../assets/icons/AddIcon";
import MemoFilterIcon from "../../assets/icons/FilterIcon";
import { Path } from "../../routes/Path";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";
import { Form } from "../inputs/Form";
import { Input } from "../inputs/Input";
import { A } from "../link/A";
import { Filter } from "./Fillter";

interface IProps {
  display?: string;
}

export const FillterBar: React.FC<IProps> = ({ display }) => {
  return (
    <Filter>
      <A width="auto" bgHover={Color.Primary} to={Path.addQrc}>
        <MemoAddIcon width="2.5rem" />
      </A>
      <Button hoverColor={Color.Primary}>
        <MemoFilterIcon width="2.5rem" />
      </Button>
      <Form direction="row" margin="0" width="47rem">
        <Input raduis="1rem" placeholder="نام مرکز" />
        <Input raduis="1rem" placeholder="موضوع" />
        <Input raduis="1rem" placeholder="دسته" />
        <Input raduis="1rem" placeholder="شماره اسکن" />
      </Form>
    </Filter>
  );
};
