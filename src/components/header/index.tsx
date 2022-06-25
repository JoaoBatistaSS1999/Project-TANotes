import React from "react";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>TAnotes</h2>
      </div>
      <div className='joke'>
        powered by <strong>Absolutely Nobody</strong>
      </div>
    </Container>
  );
};
export default Header;
