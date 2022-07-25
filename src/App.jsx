import React from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Navigation/Nav";
import Sobre from "./components/Sobre/Sobre";
import Projects from "./components/Projects/Projects";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin : 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
`;

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Nav/>
      <Banner/>
      <Sobre/>
      <Projects/>
    </div>
  );
}

export default App;
