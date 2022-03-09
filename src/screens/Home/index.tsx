import React from 'react';
import {Text} from 'react-native';
import Fonts from '@constants/fonts';
import {Container} from './styles';

const Home = () => {
  return (
    <Container>
      <Text style={{fontFamily: Fonts.Roboto_Bold, fontSize: 20}}>Hom!!e</Text>
    </Container>
  );
};

export default Home;
