import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctProps from './components/FunctProps';
import Counter from './components/Counter';
import ClickCounter from './components/ClickCounter'
import HoverComponent from './components/HoverComponent';
import Parent from './components/Parent';
import {UserProvider} from './components/context';

function App() {
  return (
    <div className="App">
      {/* <FunctProps name={(isLoggedIn) => isLoggedIn? 'Priyesha' : 'User'}/>
      <Counter> 
      {(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount}/>
      )}
     </Counter>
     
      <Counter>
      {(count, incrementCount) => (
        <HoverComponent count={count} incrementCount={incrementCount}/>
      )}
      </Counter>  */}
      <UserProvider value="Priyesha">
      <Parent/>
      </UserProvider>
      <Parent/>
    </div>
  );
}

export default App;
