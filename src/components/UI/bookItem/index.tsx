import React from "react";
import { Container } from "./styles";
import book from "../../../assets/book.png";

const BookItem: React.FC = () => {
  return (
    <Container>
      <div className='img-container'>
        <img src={book} alt='book-cover' />
      </div>
      <h4>Name</h4>
      <button>Download PDF</button>
    </Container>
  );
};
export default BookItem;
