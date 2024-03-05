import React from "react";
import { ListItem } from "../List/Item";
import { List } from "../List/List";
import { ListWarrper } from "../List/Warrper";
import { P } from "../paragraphs/P";

export const ProvinceList = () => {
  const provinces = [
    "همدان",
    "ملایر",
    "نهاوند",
    "اسدآباد",
    "تویسرکان",
    "بهار",
    "کبودراهنگ",
  ];

  return (
    <ListWarrper>
      <P aling="center">لیست شهرستان ها</P>
      <List>
        {provinces.map((p) => (
          <ListItem>{p}</ListItem>
        ))}
      </List>
    </ListWarrper>
  );
};
