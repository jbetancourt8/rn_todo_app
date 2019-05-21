import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './src/store/configureStore';
import HomeScreen from './src/screens/HomeScreen';

console.disableYellowBox = true;

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HomeScreen />
        </PersistGate>
      </Provider>
    )
  }
}