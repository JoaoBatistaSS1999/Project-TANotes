import React from "react";
import TopicTitle from "../UI/topic/topicTitle";
import { Container } from "./styles";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <TopicTitle title='Exeptions' drop={false} />
      <TopicTitle title='Momentum' drop={true} />
      <TopicTitle title='Fibonacci' drop={true} />
      <TopicTitle title='Elliot' drop={true} />
      <TopicTitle title='Patterns' drop={true} />
      <TopicTitle title='Info' drop={false} />
      <TopicTitle title='Books' drop={false} />
    </Container>
  );
};
export default Sidebar;
