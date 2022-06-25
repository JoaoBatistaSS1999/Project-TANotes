import React from "react";
import { Container } from "./styles";
import Sidebar from "../sidebar/index";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <div className='content-container'>
        <div className='contents'>Content</div>
      </div>
    </Container>
  );
};
export default Main;
