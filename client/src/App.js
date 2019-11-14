import React from 'react';
import logo from './logo.svg';
import './App.css';
import lock from './Auth';

function App(props) {
  return (
    <div className="App">
      <button onClick={event => { event.preventDefault(); props.lock.show()}}>Login</button>
    </div>
  );
}

export default App;
