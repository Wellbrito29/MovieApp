import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Fonts from '@constants/fonts';
import {Container, SearchContainer, SearchBarComponent} from './styles';
import {services} from '@api/services';
import {requester} from '@api/requester';

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  async function FetchData() {
    const service = {
      ...services.getTopMovies,
      endpoint: services.getTopMovies.endpoint,
    };
    const result: RequesterResponseModel = await requester(service);

    console.log(result);
    setTopRatedMovies(result.data.results);
  }

  console.log(topRatedMovies);
  useEffect(() => {
    FetchData();
  }, []);

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
