import React from "react";
import * as S from "./ProjectsStyle";
import P from "../../asents/img/provisorio.png"

export default function Projects(){
    return (
<S.ContainerProjects>
        <S.Title>MEUS PROJETOS</S.Title>
        <S.Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae at possimus</S.Text>
        <S.MyProject>
            <img src={P} alt=""/>
            <img src={P} alt=""/>
            <img src={P} alt=""/>
            <img src={P} alt=""/>
        </S.MyProject>
</S.ContainerProjects>
    )
}