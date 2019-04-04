import React from 'react';
import FluxActualite from './FluxActualite';
import { actualites } from './actualites';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FluxActualite actualites= { actualites } />
      </div>
    );
  }
}

export default App;
