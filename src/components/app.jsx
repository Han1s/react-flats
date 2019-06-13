import React, { Component } from 'react';
import FlatList from './flat-list';
import flats from '../../data/flats.js';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList flats={flats}/>
        <div className="map-container" />
      </div>
    );
  }
}

export default App;
