/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import {format} from 'date-fns';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {StackNavigationProp} from '@react-navigation/stack';
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
  CardPopularMovie,
  MovieFlatList,
  TopMovieTextContainer,
  MovieCardWrapper,
  EmptyMovieText,
  MovieTopCardWrapper,
} from './styles';
import {services} from '@api/services';
import {requester} from '@api/requester';
import {MainParamList} from '@/navigation/types';

const {width: screenWidth} = Dimensions.get('window');

type HomeNavigationProps = StackNavigationProp<MainParamList, 'Main'>;
type HomeProps = {navigation: HomeNavigationProps};

const Home = ({navigation}: HomeProps) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchTextValue, setSearchTextValue] = useState('');
  const [fullTopRatedMovies, setFullTopRatedMovies] = useState([]);
  const [fullPopularMovies, setFullPopularMovies] = useState([]);

  async function FetchData() {
    const serviceTopMovie = {
      ...services.getTopMovies,
      endpoint: services.getTopMovies.endpoint,
    };
    const servicePopularMovie = {
      ...services.getPopularMovies,
      endpoint: services.getPopularMovies.endpoint,
    };

    const [resultTopMovie, resultPopularMovie]: [
      RequesterResponseModel,
      RequesterResponseModel,
    ] = [
      await requester(serviceTopMovie),
      await requester(servicePopularMovie),
    ];

    setTopRatedMovies(resultTopMovie.data.results);
    setPopularMovies(resultPopularMovie.data.results);
    setFullTopRatedMovies(resultTopMovie.data.results);
    setFullPopularMovies(resultPopularMovie.data.results);
  }

  useEffect(() => {
    FetchData();
  }, []);

  const filterMovieTopRated = () => {
    const filteredData = fullTopRatedMovies.filter((customData: any) => {
      const titleValid = customData.title
        .toLowerCase()
        .includes(searchTextValue.toLowerCase());
      const dateValid = format(
        new Date(customData.release_date),
        'MM-dd-yyyy',
      ).includes(searchTextValue);

      if (titleValid || dateValid) {
        return customData;
      }
    });

    setTopRatedMovies(filteredData);
  };

  const filterMoviePopular = () => {
    const filteredData = fullPopularMovies.filter((customData: any) => {
      const titleValid = customData.title
        .toLowerCase()
        .includes(searchTextValue.toLowerCase());
      const dateValid = format(
        new Date(customData.release_date),
        'MM-dd-yyyy',
      ).includes(searchTextValue);

      if (titleValid || dateValid) {
        return customData;
      }
    });
    setPopularMovies(filteredData);
  };

  useEffect(() => {
    if (searchTextValue === '') {
      setTopRatedMovies(fullTopRatedMovies);
      setPopularMovies(fullPopularMovies);
    } else {
      filterMoviePopular();
      filterMovieTopRated();
    }
  }, [searchTextValue]);

  const renderItemMovies = ({item, index}: {item: any; index: number}) => {
    return (
      <MovieCardWrapper
        onPress={() => navigation.navigate('Details', {id: item.id})}>
        <CardPopularMovie
          key={index}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          }}>
          <TopMovieTextContainer>
            <TopMovieText>{item.title}</TopMovieText>
          </TopMovieTextContainer>
        </CardPopularMovie>
      </MovieCardWrapper>
    );
  };

  const renderItem = (
    {item, index}: {item: any; index: number},
    parallaxProps: any,
  ) => {
    return (
      <CardParallax key={index}>
        <MovieTopCardWrapper
          onPress={() => navigation.navigate('Details', {id: item.id})}>
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
        </MovieTopCardWrapper>
      </CardParallax>
    );
  };

  return (
    <MainScroll>
      <Container>
        <SearchContainer>
          <SearchBarComponent
            onChangeText={text => setSearchTextValue(text)}
            value={searchTextValue}
            onClearPress={() => setSearchTextValue('')}
          />
        </SearchContainer>

        {topRatedMovies.length > 0 && (
          <React.Fragment>
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
          </React.Fragment>
        )}
        {popularMovies.length > 0 && (
          <React.Fragment>
            <PopularMovieText>Movies</PopularMovieText>
            <MovieFlatList data={popularMovies} renderItem={renderItemMovies} />
          </React.Fragment>
        )}
        {topRatedMovies.length === 0 && popularMovies.length === 0 && (
          <EmptyMovieText>Opss, no movie found!!</EmptyMovieText>
        )}
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
