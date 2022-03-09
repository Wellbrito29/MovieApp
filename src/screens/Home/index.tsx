import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Platform, View} from 'react-native';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  Container,
  SearchContainer,
  SearchBarComponent,
  CardParallax,
  CarouselContainer,
  CarouselTitle,
  TopMovieText,
  CarouselTitleContainer,
  PopularMovieText,
  MainScroll,
} from './styles';
import {services} from '@api/services';
import {requester} from '@api/requester';

const {width: screenWidth} = Dimensions.get('window');

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  async function FetchData() {
    const service = {
      ...services.getTopMovies,
      endpoint: services.getTopMovies.endpoint,
    };
    const result: RequesterResponseModel = await requester(service);

    setTopRatedMovies(result.data.results);
  }

  useEffect(() => {
    FetchData();
  }, []);

  console.log(topRatedMovies[0]);
  const renderItem = (
    {item, index}: {item: any; index: number},
    parallaxProps: any,
  ) => {
    return (
      <CardParallax key={index}>
        <ParallaxImage
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <CarouselTitleContainer>
          <CarouselTitle>{item.title}</CarouselTitle>
        </CarouselTitleContainer>
      </CardParallax>
    );
  };

  return (
    <MainScroll>
      <Container>
        <SearchContainer>
          <SearchBarComponent
            onPress={() => console.log('onPress')}
            onChangeText={text => console.log(text)}
          />
        </SearchContainer>

        <TopMovieText>Top Rated Movies</TopMovieText>

        <CarouselContainer>
          <Carousel
            sliderWidth={screenWidth}
            sliderHeight={screenWidth}
            itemWidth={screenWidth - 60}
            data={topRatedMovies}
            renderItem={renderItem}
            hasParallaxImages={true}
          />
        </CarouselContainer>
        <PopularMovieText>Movies</PopularMovieText>
      </Container>
    </MainScroll>
  );
};
const styles = StyleSheet.create({
  item: {
    width: screenWidth - 60,
    height: screenWidth - 60,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});

export default Home;
