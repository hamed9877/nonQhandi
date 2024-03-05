import styled from "styled-components";
import MemoListcenter from "../../assets/icons/Listcenter";
import MemoListcode from "../../assets/icons/Listcode";
import MemoReaction from "../../assets/icons/Reaction";
import { Color } from "../../styles/global/Color";

const KebabBtn = () => {
  return (
    <Kebab>
      <input type="checkbox" id="navi-toggle" className="checkbox" />
      <label className="button">
        <span className="btn-icon"></span>
      </label>
      <nav className="nav">
        <ul className="list">
          <li className="item">
            <a href="#" className="link">
              <MemoListcode margin="0" width="28px" />
              <span>لیست کدها</span>
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              <MemoListcenter margin="0" width="28px" />
              <span>لیست مراکز</span>
            </a>
          </li>
          <li className="item">
            <a href="#" className="link">
              <MemoReaction margin="0" width="28px" />
              <span>لیست واکنش ها</span>
            </a>
          </li>
        </ul>
      </nav>
    </Kebab>
  );
};

export default KebabBtn;

const Kebab = styled.div`
  position: relative;
  left: 0;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  .checkbox {
    display: block;
    position: absolute;
    height: 2rem;
    width: 2rem;
    left: 0;
    z-index: 4;
    opacity: 0;
    cursor: pointer;
  }
  .button {
    border-radius: 50%;
    position: relative;

    background-color: $color-white;
    z-index: 1;
    text-align: center;
    /* box-shadow: 0 0.5rem 1rem #00000030; */
    cursor: pointer;
  }

  .nav {
    height: 100px;
    width: 0;
    opacity: 0;
    display: none;
    position: absolute;
    top: 3.375rem;
    left: 6rem;
    z-index: 1500;
    transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    &::before {
      content: " ";
      position: absolute;
      right: 5rem;
      top: -10px;
      border-top: none;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
      border-bottom: 10px solid ${Color.Primary};
    }
  }
  .list {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: ${Color.Primary};
    border-radius: 0.5rem;
  }
  .item {
    list-style-type: none;
    &:not(:last-child) {
      border-bottom: solid 1px ${Color.grayLight};
    }
  }
  .link {
    &:link,
    &:visited {
      display: flex;
      align-items: center;
      text-transform: uppercase;
      text-decoration: none;
      color: ${Color.white};
      font-size: 0.75rem;
      padding: 0.25rem;
      width: max-content;
      transition: all 0.4s;
    }

    span {
      display: inline-block;
      margin-right: 0.25rem;
    }
  }

  .checkbox:checked ~ .nav {
    opacity: 1;
    display: block;
    width: 100%;
  }

  .btn-icon {
    position: relative;
    &,
    &::after,
    &::before {
      height: 0.25rem;
      width: 0.25rem;
      border-radius: 50%;
      background-color: ${Color.Primary};
      display: inline-block;
    }
    &::after,
    &::before {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.2s;
    }
    &::before {
      top: -0.7rem;
    }
    &::after {
      top: 0.7rem;
    }
  }

  .checkbox:checked + .button .btn-icon {
    background-color: transparent;
  }
  .checkbox:checked + .button .btn-icon::before {
    top: 0;
    transform: rotate(180deg);
    border-radius: 0;
    width: 1.5rem;
  }
  .checkbox:checked + .button .btn-icon::after {
    top: 0;
    transform: rotate(-135deg);
  }
`;
