import React, { Component } from 'react';
import { Box, Sphere, Cylinder } from 'react-vr';

const shapes = [Box, Sphere, Cylinder];

class Shape extends Component {
  render() {
    const ShapeComponent = shapes[this.props.shapeNumber];
    const colors = ['#c33', '#3c3', '#33c', '#ccc'];

    return (
      <ShapeComponent
        style={{
          color: colors[this.props.colorNumber],
          transform: this.props.transform,
        }}
      />
    );
  }
}

export default Shape;
