import React from "react";
import TopicTitle from "../UI/topic/topicTitle";
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopicTitle title='testing' />
      <TopicTitle title='testing' />
      <TopicTitle title='testing' />
      <TopicTitle title='testing' />
    </Container>
  );
};
export default Sidebar;
