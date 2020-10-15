import React from 'react';
import logo from './logo.svg';
import dado from './dado.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dado} className="App-logo" alt="logo" />
        <br/>
        <p>Valor de apuesta.</p>
        <input className="redondeado confondo text-claro" placeholder="Valor de la apuesta"/>
        <br/>
        <button className="btn rounded"><span className="text-green">Lanzar Dado !!</span></button>
        <p>La apuesta se: </p>
        <label>"Perdio / Gano"</label>
      </header>
    </div>
  );
}

export default App;
