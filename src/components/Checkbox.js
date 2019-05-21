import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

const styles = {
  box: {
    height: 20,
    width: 20,
    borderWidth: 2,
    borderColor: 'black',
  },
  inner: {
    flex: 1,
    margin: 2,
    backgroundColor: 'lightgreen',
  },
};

export default class Checkbox extends Component {
  render() {
    const { onToggle, isChecked } = this.props;

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          { isChecked && <View style={styles.inner}/> }
        </View>
      </TouchableOpacity>
    )
  }
};