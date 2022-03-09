import React from 'react';
import {Text} from 'react-native';
import Fonts from '@constants/fonts';
import {Container, SearchContainer, SearchBarComponent} from './styles';

const Home = () => {
  return (
    <Container>
      <SearchContainer>
        <SearchBarComponent
          onPress={() => console.log('onPress')}
          onChangeText={text => console.log(text)}
        />
      </SearchContainer>
      <Text style={{fontFamily: Fonts.Roboto_Bold, fontSize: 20}}>Hom!!e</Text>
    </Container>
  );
};

export default Home;
