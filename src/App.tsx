import React from 'react';
import './App.css';
import {Header} from '../src/layout/header/Header'
import {Main} from '../src/layout/sections/main/Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
