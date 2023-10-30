import React from 'react';
import './App.css';
import {Header} from '../src/layout/header/Header'
import {Main} from '../src/layout/sections/main/Main';
import {Skills} from '../src/layout/sections/skills/Skills';
import {Works} from '../src/layout/sections/works/Works';
import {Contacts} from '../src/layout/sections/contacts/Contacts';
import {Footer} from '../src/layout/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
