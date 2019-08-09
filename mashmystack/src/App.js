import React from 'react';
import './App.scss';
import Masher from "./Masher";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content_container">
        <h1 className="title">Mash My Stack</h1>

        <p className="headline"><strong>Experience different technologies</strong> and see what works well together and what does not. Go outside the box of typical tech stacks. Take the Mash My Stack challenge
        and get a stack to build your app with!</p>

        <Masher />

      </div>
    </div>
  );
}

export default App;
