import React from "react";
import { Container } from "./styles";
import Sidebar from "../sidebar/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookGrid from "../../pages/books/index";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <div className='content-container'>
        <BrowserRouter>
          <Routes>
            <Route path='/books' element={<BookGrid />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Container>
  );
};
export default Main;
