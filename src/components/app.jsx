import React, { Component } from 'react';
import FlatList from './flat-list';

class App extends Component {
  render() {
    return (
      <div>
        <FlatList />
        <div className="map-container" />
      </div>
    );
  }
}

export default App;
