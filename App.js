import {StyleSheet} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/Store';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
