import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {BackHandler} from 'react-native';

import Home from '../screens/Home';
import Details from '../screens/Details';

const {Navigator, Screen} = createStackNavigator();

export default function HomeStack() {
  const navigation = useNavigation();

  const handleBackButton = () => {
    navigation.goBack();
    return true;
  };

  useFocusEffect(() => {
    const subscription = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButton,
    );
    return () => subscription.remove();
  });

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main">
      <Screen
        name="Main"
        component={Home}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />

      <Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
          gestureDirection: 'horizontal',
        }}
      />
    </Navigator>
  );
}
