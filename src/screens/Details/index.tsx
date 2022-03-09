import React from 'react';
import {View, Text} from 'react-native';
import Fonts from '@constants/fonts';

const Details = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontFamily: Fonts.Roboto_Medium, fontSize: 20}}>Home</Text>
    </View>
  );
};

export default Details;
