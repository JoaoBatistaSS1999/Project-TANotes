import React from "react";
import { Container } from "./styles";
import Sidebar from "../sidebar/index";
import { Route, Routes } from "react-router-dom";
import BookGrid from "../../pages/books/index";
import Exceptions from "../../pages/exceptions";
import Strategys from "../../pages/strategys";
import Mentality from "../../pages/mentality/index";

const Main: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <div className='content-container'>
        <Routes>
          <Route path='/books' element={<BookGrid />} />
          <Route path='/exceptions' element={<Exceptions />} />
          <Route path='/strategys' element={<Strategys />} />
          <Route path='/mentality' element={<Mentality />} />
          <Route path='/books' element={<BookGrid />} />
          <Route path='/books' element={<BookGrid />} />
          <Route path='/books' element={<BookGrid />} />
        </Routes>
      </div>
    </Container>
  );
};
export default Main;
