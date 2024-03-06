import React from "react";
import MemoFilterIcon from "../../assets/icons/FilterIcon";
import { Filter } from "../divitions/Fillter";
import { Form } from "../inputs/Form";
import { Input } from "../inputs/Input";

export const ProvinceFillter = () => {
  return (
    <Filter>
      <MemoFilterIcon width="2rem" margin="0 .5rem" />
      <Form direction="row" margin="0" width="25rem">
        <Input raduis="1rem" placeholder="نام " />
        <Input raduis="1rem" placeholder="نام کشور" />
      </Form>
    </Filter>
  );
};
