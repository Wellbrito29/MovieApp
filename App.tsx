import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  'VirtualizedLists should never be nested',
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
          translucent
        />

        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
