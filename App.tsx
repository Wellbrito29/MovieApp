/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <>
      <StatusBar barStyle={'light-content'} />

      <Navigation />
    </>
  );
};

export default App;
