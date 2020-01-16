import React, {useState} from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Output from './components/Output';
import './App.css';

// hihihihhihihi

function App () {



  return (
    <div className="App">
      <Header />
      <div id="calculator-container">
        <Calculator />
        <Output />
      </div>
    </div>
  );
}

export default App;
