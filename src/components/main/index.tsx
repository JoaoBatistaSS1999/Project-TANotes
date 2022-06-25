import React from "react";
import { Container } from "./styles";
import Sidebar from "../sidebar/index";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <div>Content</div>
    </Container>
  );
};
export default Main;
