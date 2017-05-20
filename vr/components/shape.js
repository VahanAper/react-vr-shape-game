import React, { Component } from 'react';
import { Box, Sphere, Cylinder } from 'react-vr';

const shapes = [Box, Sphere, Cylinder];

class Shape extends Component {
  render() {
    const ShapeComponent = shapes[this.props.shapeNumber];

    return (
      <ShapeComponent
        style={{
          color: '#fff',
          transform: this.props.transform,
        }}
      />
    );
  }
}

export default Shape;
