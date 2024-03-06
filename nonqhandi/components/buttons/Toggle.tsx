import React, { useState } from "react";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";

interface IToggle {
  alignItems?: string;
  width?: string;
  left?: string;
}

const ToggleBtn: React.FC<IToggle> = ({ alignItems, left, width }) => {
  const [check, setCheck] = useState(false);
  return (
    <ToggleWarrper alignItems={alignItems} width={check ? "100%" : "0"}>
      <Input
        left={left}
        type="checkbox"
        id="toggle"
        onClick={() => setCheck(!check)}
      />

      <Label left={left} className="switch"></Label>
      <Disable className="disable" width={width}>
        &nbsp;
      </Disable>
    </ToggleWarrper>
  );
};

export default ToggleBtn;

export const UserToggle: React.FC = () => {
  return (
    <UserToggleWarrper>
      <UserInput id="a" type="checkbox" />
      <label htmlFor="a">
        <div
          className="can-toggle__switch"
          data-checked="مدیران"
          data-unchecked="کاربران عادی"
        ></div>
      </label>
    </UserToggleWarrper>
  );
};

const ToggleWarrper = styled.div<IToggle>`
  position: absolute;
  z-index: 3;
  height: 100%;

  width: ${({ width }) => width || "0"};
  padding: 0.5rem;
  left: 0;
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
`;

const Input = styled.input<IToggle>`
  cursor: pointer;
  position: absolute;
  left: ${({ left }) => left || ".5rem"};

  width: 2.5rem;
  height: 1.5rem;

  border: none;

  opacity: 0;

  z-index: 3;
  &:checked + .switch::after {
    left: 1px;
  }
  &:checked ~ .disable {
    display: block;
    width: 100%;
  }
  &:checked + .switch {
    background-color: ${Color.gray50};
  }
`;
const Label = styled.label<IToggle>`
  position: absolute;

  left: ${({ left }) => left || ".5rem"};

  display: inline-block;

  width: 40px;
  height: 20px;

  background-color: ${Color.Primary};

  border-radius: 20px;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    top: 1px;
    left: 1.25rem;
    transition: all 0.3s;
  }
`;
interface IDisable {
  width?: string;
}
const Disable = styled.div<IDisable>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${Color.shadow};
  z-index: -2;
  opacity: 0.5;
  display: none;
  width: ${({ width }) => width + "!important" || "100%"};
`;
//// user toggle
const UserToggleWarrper = styled.div`
  position: relative;
  width: 8.375rem;
  height: 2.125rem;
  border: 1px solid ${Color.Primary};
  border-radius: 4px;
  label {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    .can-toggle__switch {
      position: relative;
      -webkit-transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
      transition: background-color 0.3s cubic-bezier(0, 1, 0.5, 1);
      background: transparent;
      height: 36px;
      -webkit-flex: 0 0 134px;
      -ms-flex: 0 0 134px;
      flex: 0 0 134px;
      border-radius: 4px;
      &:before {
        color: ${Color.Primary};
        content: attr(data-checked);
        position: absolute;
        top: 0;
        text-align: center;
        left: 67px;
        font-size: 12px;
        line-height: 30px;
        width: 67px;
      }
      &:after {
        content: attr(data-unchecked);
        position: absolute;
        z-index: 2;
        text-transform: uppercase;
        text-align: center;
        background: ${Color.Primary};
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        -webkit-transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
        transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
        color: ${Color.white};

        left: 2px;
        border-radius: 2px;
        width: 67px;
        line-height: 32px;
        font-size: 12px;
      }
    }
  }
`;
const UserInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  &:checked ~ label .can-toggle__switch:before {
    content: attr(data-unchecked);
    left: 0;
  }
  &:checked ~ label .can-toggle__switch:after {
    content: attr(data-checked);
    -webkit-transform: translate3d(67px, 0, 0);
    transform: translate3d(67px, 0, 0);
  }
  &:checked ~ label .can-toggle__switch {
    background-color: transparent;
  }

  &:checked ~ label .can-toggle__switch {
    background-color: transparent;
  }
  &:checked ~ label .can-toggle__switch:after {
    color: ${Color.white};
  }
`;
