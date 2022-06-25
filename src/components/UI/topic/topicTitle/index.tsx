import React from "react";
import { TitleContainer } from "./styles";
import ArrowDown from "../../../../assets/down-arrow.png";

interface IProps {
  title: string;
}

const TopicTitle: React.FC<IProps> = ({ title }) => {
  return (
    <TitleContainer>
      <h4>{title}</h4>
      <img src={ArrowDown} alt='arrow-down' />
    </TitleContainer>
  );
};
export default TopicTitle;
