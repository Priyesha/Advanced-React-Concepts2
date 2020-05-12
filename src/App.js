import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctProps from './components/FunctProps';
import Counter from './components/Counter';
import ClickCounter from './components/ClickCounter'
import HoverComponent from './components/HoverComponent';

function App() {
  return (
    <div className="App">
      <FunctProps name={(isLoggedIn) => isLoggedIn? 'Priyesha' : 'User'}/>
      <Counter render={(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount}/>
      )}/> 

      <Counter render={(count, incrementCount) => (
        <HoverComponent count={count} incrementCount={incrementCount}/>
      )}/>
    </div>
  );
}

export default App;
