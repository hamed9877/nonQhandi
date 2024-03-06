import React from "react";
import { ListItem } from "../List/Item";
import { List } from "../List/List";
import { ListWarrper } from "../List/Warrper";
import { P } from "../paragraphs/P";

export const CityList = () => {
  const Country = [""];
  return (
    <ListWarrper>
      <P aling="center">لیست بخش ها</P>
      <List>
        {Country.map((c) => (
          <ListItem>{c}</ListItem>
        ))}
      </List>
    </ListWarrper>
  );
};
