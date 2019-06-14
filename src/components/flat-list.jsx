import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  render() {
        console.log(this.props.flats);
    return (
      <div className="flat-list">
        <Flat></Flat>
        <Flat></Flat>
        <Flat></Flat>
        <Flat></Flat>
        <Flat></Flat>
        <Flat></Flat>
      </div>
    );
  }
}

export default FlatList;
