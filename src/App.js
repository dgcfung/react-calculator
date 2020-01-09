import React from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Output from './components/Output';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <Output />
    </div>
  );
}

export default App;
