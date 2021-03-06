import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
    return (
      <div className="flat-list">
        {
          this.props.flats.map((flat) => {
            return (
              <Flat flatInfo={flat} key={flat.lat}></Flat>
            )
          })
        }
      </div>
    );
  }
}

export default FlatList;
