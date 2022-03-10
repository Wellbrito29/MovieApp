/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './homeStack';
import Favorites from '../screens/Favorites';
import {TabText} from './styles';
const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#673AB7"
      barStyle={{backgroundColor: '#19191a'}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: <TabText>Home</TabText>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="filmstrip" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Favorites}
        options={{
          tabBarLabel: <TabText>Favorites</TabText>,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
