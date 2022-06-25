import React from "react";
import { TitleContainer } from "./styles";
import ArrowDown from "../../../../assets/down-arrow.png";

interface IProps {
  title: string;
  drop: boolean;
}

const TopicTitle: React.FC<IProps> = ({ title, drop }) => {
  return (
    <TitleContainer>
      <h4>{title}</h4>
      {drop && <img src={ArrowDown} alt='arrow-down' />}
    </TitleContainer>
  );
};
export default TopicTitle;
