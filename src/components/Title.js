import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
  header: {
    backgroundColor: 'skyblue',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25, 
    fontWeight: 'bold'
  },
};

export default class Title extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  }
}