import React, { Component } from 'react';
import Graph from './Graph';
import ButtonBar from './ButtonBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Graph />
        <ButtonBar />
      </div>
    );
  }
}

export default App;
