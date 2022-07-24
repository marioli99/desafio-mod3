import React from "react";
import { ContainerSobre, Cards } from "./SobreStyle";
import Card from "../Cards/Card";

export default function Sobre () {
    return (
        <ContainerSobre>
            <h2>Sobre</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti delectus obcaecati suscipit dolore inventore atque aspernatur necessitatibus ipsa deserunt. Ex sunt numquam iste enim necessitatibus delectus officia dicta veniam corrupti!</p>

            <Cards><Card/></Cards>
            
        </ContainerSobre>
    )
}