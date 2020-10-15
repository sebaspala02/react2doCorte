import React from 'react';
import logo from './logo.svg';
import dado from './dado.svg';
import './App.css';
import Bet from './components/Bet';

function App() {
  return (
    <div className="App">
     <Bet number={5}></Bet>
    </div>
  );
}

export default App;
