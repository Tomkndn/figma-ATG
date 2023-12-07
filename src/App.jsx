import React from 'react'
import Navbar from './Components/Navbar';
import HeroSection from "./Components/HeroSection";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App(){
    return(
        <>
            <Navbar/>
            <HeroSection/>
            <article className="container">
                <Header/>
                <Main/>
            </article>
        </>
    )
}

export default App;