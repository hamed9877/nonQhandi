import Link from "next/link";
import React from "react";
import { ClientNavItem } from "../../data/ClientNavItem";
import { Li } from "../List/Li";
import { Ul } from "../List/Ul";
import { A } from "../link/A";
import { WebNav } from "./WebNav";

interface INav {
  active?: number;
}

export const ClientNavBar: React.FC<INav> = ({ active }) => {
  return (
    <WebNav>
      <hr />
      <Ul>
        {ClientNavItem.map((item) => (
          <Li>
            <Link href={item.to}>
              <A>
                <item.icon width="1.5rem" margin="0 0 0 .5rem" />
                <span>{item.text}</span>
              </A>
            </Link>
          </Li>
        ))}
      </Ul>
    </WebNav>
  );
};
