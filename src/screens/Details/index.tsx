import React from 'react';
import {View, Text} from 'react-native';
import Fonts from '@constants/fonts';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainParamList} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';

type MovieDetailsNavigationProp = StackNavigationProp<MainParamList, 'Details'>;
type MovieDetailsRouteProp = RouteProp<MainParamList, 'Details'>;

type MovieDetailsProps = {
  route: MovieDetailsRouteProp;
  navigation: MovieDetailsNavigationProp;
};

interface ParamsProps {
  id: number;
}

const Details = ({navigation, route}: MovieDetailsProps) => {
  const {id}: ParamsProps = route.params;

  console.log(id);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontFamily: Fonts.Roboto_Medium, fontSize: 20}}>Home</Text>
    </View>
  );
};

export default Details;
