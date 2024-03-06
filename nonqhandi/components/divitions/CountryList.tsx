import React from "react";
import { ListItem } from "../List/Item";
import { List } from "../List/List";
import { ListWarrper } from "../List/Warrper";
import { P } from "../paragraphs/P";

export const CountryList = () => {
  const city = [
    "خوزستان",
    "خراسان شمالی",
    "خراسان رضوی",
    "خراسان جنوبی",
    "چهارمحال و بختیاری",
    "تهران",
    "بوشهر",
    "ایلام",
    "البرز",
    "اصفهان",
    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
  ];
  return (
    <ListWarrper>
      <P aling="center">لیست استان ها</P>
      <List>
        {city.map((c) => (
          <ListItem>{c}</ListItem>
        ))}
      </List>
    </ListWarrper>
  );
};
