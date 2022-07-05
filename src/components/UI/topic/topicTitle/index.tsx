import React from "react";
import { TitleContainer } from "./styles";
import ArrowDown from "../../../../assets/down-arrow.png";
import { NavLink } from "react-router-dom";

interface IProps {
  title: string;
  drop: boolean;
  direct: string;
}

const TopicTitle: React.FC<IProps> = ({ title, drop, direct }) => {
  return (
    <TitleContainer>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        to={direct}>
        <h4>{title}</h4>
      </NavLink>

      {drop && <img src={ArrowDown} alt='arrow-down' />}
    </TitleContainer>
  );
};
export default TopicTitle;
