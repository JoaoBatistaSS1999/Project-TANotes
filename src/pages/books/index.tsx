import React from "react";
import BookItem from "../../components/UI/bookItem";
import { Container } from "./styles";

const BookGrid: React.FC = () => {
  return (
    <Container>
      <h2>Book recomendations</h2>
      <div className='book-grid'>
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
        <BookItem />
      </div>
    </Container>
  );
};
export default BookGrid;
