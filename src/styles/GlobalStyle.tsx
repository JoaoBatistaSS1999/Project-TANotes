import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;  
  scroll-behavior: smooth;
  transition: ease-in-out;
  

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

a:visited {
    color: #ffffff;
}

h2 {
  font-size: 22px;
}`;
