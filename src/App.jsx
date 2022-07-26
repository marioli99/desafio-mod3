import React from "react";
import Home from "./components/Home/Home";
import { createGlobalStyle } from "styled-components";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import * as S from "./components/Navigation/NavStyle";
import Onu from "./components/Onu/Onu";

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
    <Router >
      <GlobalStyle/>
      <S.ContainerNav>
        <nav>
            <S.List>
            <Link to='/'><S.Li>HOME</S.Li></Link>
            <S.Li>SKILLS</S.Li>
            <S.Li>PROJETOS</S.Li>
            <S.Li>CONTATOS</S.Li>
            <Link to='/Onu'> <S.Li>ONU</S.Li></Link>
            </S.List>
        </nav>
        </S.ContainerNav>
    
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Onu' element={<Onu/>}/>
      </Routes>
    </Router> );
}

export default App;
