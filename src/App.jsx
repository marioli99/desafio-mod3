import React from "react";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Navigation/Nav";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin : 0;
  padding: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <div >
      <GlobalStyle/>
      <Nav/>
      <Banner/>
      
    </div>
  );
}

export default App;
