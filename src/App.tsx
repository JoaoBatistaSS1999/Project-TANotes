import React from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />

      <Header />
      <div className='main'>
        <Sidebar />
      </div>
    </React.Fragment>
  );
}

export default App;
