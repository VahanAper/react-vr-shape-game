import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
} from 'react-vr';

import Shape from './vr/components/shape';

const styles = StyleSheet.create({
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      { translate: [0, 2, -5] },
    ],
  },
});

export default class ShapeGame extends Component {
  constructor() {
    super();

    this.state = {
      gameShape: [1, 1, 1, 1],
    };
  }

  render() {
    return (
      <View style={styles.text}>
        <Text>Find the Odd Shape!</Text>
        <Shape
          shapeNumber={0}
          transform={[
            { translate: [0, 0, -5] },
          ]}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);
