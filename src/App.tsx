import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
