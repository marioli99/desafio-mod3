import React from "react";
import * as S from "./ContactsStyle"
import Git from "../../../asents/img/github.png";
import Link from "../../../asents/img/link.png";
import Mail from "../../../asents/img/gmail.png";
import Insta from "../../../asents/img/instagram.png";

export default function Contacts (){
    return(
        <S.Container>
        <h3>Contatos</h3>
        <S.SubContainer>
        <img src={Git} alt="" />
        <img src={Link} alt="" />
        <img src={Mail} alt="" />
        <img src={Insta} alt="" />
        </S.SubContainer>
        </S.Container>
    )
}