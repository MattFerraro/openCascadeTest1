import React from 'react';
import logo from './logo.svg';
import './App.css';
import initOpenCascade from "opencascade.js";

function App() {
  
  React.useEffect(() => {
    console.log("LOADED APP")
    initOpenCascade().then(oc => {
      // Check out the examples on how to use this library!
      console.log("openCascade is loaded:", oc);
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
