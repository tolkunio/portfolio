import React from 'react';
import './App.css';
import {Header} from '../src/layout/header/Header'
import {Main} from '../src/layout/sections/main/Main';
import {Skills} from '../src/layout/sections/skills/Skills';
import {Works} from '../src/layout/sections/works/Works';
import {ContactMe} from './layout/sections/contactMe/ContactMe';
import {Footer} from '../src/layout/footer/Footer';
import {AboutMe} from "../src/layout/sections/aboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Works/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;
