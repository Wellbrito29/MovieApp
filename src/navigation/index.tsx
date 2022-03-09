import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './tabs';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
