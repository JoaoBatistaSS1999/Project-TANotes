import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Header />
      <Main />
    </React.Fragment>
  );
}

export default App;
