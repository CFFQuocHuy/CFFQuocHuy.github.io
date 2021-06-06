import logo from "./logo.svg";
import "./App.css";
// import CounterMemo from "./container";
import { Counter } from "./container";
import { Counter as CounterClass } from "./container/counter";
import React, { useState } from "react";

function App() {
  const [appState, setAppState] = useState(100);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setAppState(appState + 1)}>
          change app state {appState}
        </button>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <CounterMemo /> */}
        {/* // Seperation of concernF */}
        {/* <Counter /> */}
        {/* {appState >= 102 ? null : <CounterClass />} */}
        {/* {/* {appState >= 102 && <CounterClass />} */}
        {appState <= 102 && <Counter />}
      </header>
    </div>
  );
}

export default App;
