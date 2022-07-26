import React from "react";
import * as S from "./BannerStyle";
import Me from "../../../asents/img/me.jpeg"

export default function Banner (){
    return (
        <S.Container>
        <S.ContainerTitle>
        <S.Title>Olá, me chamo</S.Title>
        <S.Name>Mariana Oliveira</S.Name>
        <S.Title>Web Developer</S.Title>
        </S.ContainerTitle>
        <S.Img src={Me} alt="Foto de Perfil" />
        </S.Container>
    )
}
