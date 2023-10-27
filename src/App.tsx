import React from 'react';
import './App.css';
import {Header} from '../src/layout/header/Header'
import {Main} from '../src/layout/sections/main/Main';
import {Skills} from '../src/layout/sections/skills/Skills';
import {Works} from '../src/layout/sections/works/Works';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
