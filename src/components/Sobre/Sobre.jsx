import React from "react";
import { ContainerSobre, Cards } from "./SobreStyle";
import * as S from "./CardStyle";

export default function Sobre () {
    return (
        <ContainerSobre>
            <h2>Sobre</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus obcaecati suscipit dolore inventore atque aspernatur necessitatibus ipsa deserunt. Ex sunt numquam iste enim necessitatibus delectus officia dicta veniam corrupti!</p>

            <S.ContainerCard>
            <S.CardBackground>
                <S.H3>FORMAÇÃO:</S.H3>
                <S.Ul>
                    <li>teste teste teste</li>
                    <li>teste teste teste</li>
                    <li>teste teste teste</li>
                </S.Ul>
            </S.CardBackground>
            <S.CardBackground>
            <S.H3>FORMAÇÃO:</S.H3>
                <S.Ul>
                    <li>teste teste teste</li>
                    <li>teste teste teste</li>
                    <li>teste teste teste</li>
                </S.Ul>
            </S.CardBackground>
            <S.CardBackground>
            <S.H3>FORMAÇÃO:</S.H3>
                <S.Ul>
                    <li>teste teste teste</li>
                    <li>teste teste teste</li>
                    <li>teste teste teste</li>
                </S.Ul>
            </S.CardBackground>
        </S.ContainerCard>
            
        </ContainerSobre>
    )
}