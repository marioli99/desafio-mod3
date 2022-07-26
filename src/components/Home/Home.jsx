import React from "react";
import Sobre from "./Sobre/Sobre";
import Projects from "./Projects/Projects";
import Banner from "./Banner/Banner";
import Contacts from "./Contacts/Contacts";
export default function Home () {
    return(
        <>
        <Banner/>
        <Sobre/>
        <Projects/>
        <Contacts/>
        </>
    )
}