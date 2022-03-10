/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Fonts from '@constants/fonts';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainParamList} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {services} from '@api/services';
import {requester} from '@api/requester';

type MovieDetailsNavigationProp = StackNavigationProp<MainParamList, 'Details'>;
type MovieDetailsRouteProp = RouteProp<MainParamList, 'Details'>;

type MovieDetailsProps = {
  route: MovieDetailsRouteProp;
  navigation: MovieDetailsNavigationProp;
};

interface ParamsProps {
  id: string;
}

const Details = ({navigation, route}: MovieDetailsProps) => {
  const {id}: ParamsProps = route.params;
  const [movie, setMovie] = useState({});

  async function FetchData() {
    const service = {
      ...services.getMovieDetails,
      endpoint: services.getMovieDetails.endpoint.replace('{{id}}', id),
    };
    console.log(service.endpoint);

    const result: RequesterResponseModel = await requester(service);
    console.log(result.data);
    setMovie(result.data);
  }

  useEffect(() => {
    FetchData();
  }, []);

  console.log(movie);

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{fontFamily: Fonts.Roboto_Medium, fontSize: 20}}>Home</Text>
    </View>
  );
};

export default Details;
