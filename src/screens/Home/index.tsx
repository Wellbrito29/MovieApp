import React from 'react';
import {View, Text} from 'react-native';
import Fonts from '../../constants/fonts';

const Home = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'red',
      }}>
      <Text style={{fontFamily: Fonts.Roboto_Bold, fontSize: 20}}>Hom!!e</Text>
    </View>
  );
};

export default Home;
