/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Fonts from '@constants/fonts';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainParamList} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {services} from '@api/services';
import {requester} from '@api/requester';
import {ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import {
  Container,
  CardContainer,
  Icon,
  IconContainer,
  MovieTitleContainer,
  TitleText,
  IconHeartContainer,
  TopicTitleText,
  MovieYearContainer,
  TopicText,
  TopicTextCount,
  TopicTitleTextIcon,
  TitleIconContainer,
} from './styles';

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
  const [movie, setMovie] = useState<any>({});

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

  const MainContainer = () => {
    return (
      <CardContainer>
        <MovieTitleContainer>
          <TitleText>{movie?.title}</TitleText>
        </MovieTitleContainer>
        <MovieYearContainer>
          <TitleText>({movie?.release_date?.split('-')[0]})</TitleText>
        </MovieYearContainer>
        <TitleIconContainer>
          <TopicTitleTextIcon>OverView</TopicTitleTextIcon>
          <IconHeartContainer>
            <Icon name="heart" />
          </IconHeartContainer>
        </TitleIconContainer>
        <TopicText>{movie?.overview}</TopicText>
        <TopicTitleText>Popularity</TopicTitleText>
        <TopicText>Vote Average: {movie?.vote_average}</TopicText>
        <TopicTextCount>Vote Count: {movie?.vote_count}</TopicTextCount>
      </CardContainer>
    );
  };

  return (
    <Container>
      <ImageHeaderScrollView
        maxHeight={300}
        minHeight={100}
        headerImage={{
          uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`,
        }}
        renderForeground={() => (
          <IconContainer onPress={() => navigation.goBack()}>
            <Icon name="arrow-left-circle" />
          </IconContainer>
        )}>
        <MainContainer />
      </ImageHeaderScrollView>
    </Container>
  );
};

export default Details;
