import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  color: #000000;
  scroll-behavior: smooth;
  transition: ease-in-out;
  
  &::selection {
    background-color: #ffffff;
    color: #000000;
  }
}

button {
    cursor: pointer;
    border: none;    
}

ul {
    list-style: none;
}

a {
  text-decoration: none;  
}

h2 {
  font-size: 22px;
}`;
