import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctProps from './components/FunctProps';

function App() {
  return (
    <div className="App">
      <FunctProps name={(isLoggedIn) => isLoggedIn? 'Priyesha' : 'User'}/>
    </div>
  );
}

export default App;
