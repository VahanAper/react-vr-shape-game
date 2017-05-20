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
  game: {
    transform: [
      { translate: [-2.25, 0, 0] },
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
      <View style={styles.game}>
        <Text style={styles.text}>Find the Odd Shape!</Text>
        {
          this.state.gameShape.map((shape, index) => {
            const key = `key_${index}`;
            return (
              <View key={key}>
                <Shape
                  shapeNumber={shape}
                  colorNumber={index}
                  transform={[
                    { translate: [(index - 1.5) * 1.5, 0, -5] },
                  ]}
                />
              </View>
            );
          })
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('ShapeGame', () => ShapeGame);
