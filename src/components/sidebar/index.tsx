import React from "react";
import TopicTitle from "../UI/topic/topicTitle";
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopicTitle title='Exeptions' drop={false} direct='/exceptions' />
      <TopicTitle title='Momentum' drop={true} direct='/books' />
      <TopicTitle title='Strategys' drop={true} direct='/strategys' />
      <TopicTitle title='Mentality' drop={true} direct='/mentality' />
      <TopicTitle title='Patterns' drop={true} direct='/patterns' />
      <TopicTitle title='Info' drop={false} direct='/books' />
      <TopicTitle title='Books' drop={false} direct='/books' />
    </Container>
  );
};
export default Sidebar;
