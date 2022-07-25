import React from "react";
import { List, ContainerNav, Li} from "./NavStyle";

export default function Nav (){
    return (
        <ContainerNav>
        <nav>
            <List>
                <Li>SOBRE</Li>
                <Li>SKILLS</Li>
                <Li>PROJETOS</Li>
                <Li>CONTATOS</Li>
                <Li>SUSTENTABILIDADE</Li>
            </List>
        </nav>
        </ContainerNav>
    )
}