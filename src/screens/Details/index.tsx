/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainParamList} from '@/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {services} from '@api/services';
import {requester} from '@api/requester';
import {ApplicationState, saveListMovie} from '@/redux';
import {useDispatch, useSelector} from 'react-redux';
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
  ImageBackGround,
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
  const [userSaved, setUserSaved] = useState(false);
  const dispatch = useDispatch();
  const {saveMovie} = useSelector(
    (state: ApplicationState) => state.saveMovieReducer,
  );
  async function FetchData() {
    const service = {
      ...services.getMovieDetails,
      endpoint: services.getMovieDetails.endpoint.replace('{{id}}', id),
    };

    const result: RequesterResponseModel = await requester(service);
    setMovie(result.data);

    const userSavedMovie = checkIfSaved();
    setUserSaved(userSavedMovie);
  }

  useEffect(() => {
    FetchData();
  }, []);

  const handlePressFavorite = () => {
    const nextAction = !userSaved;
    setUserSaved(nextAction);

    if (nextAction) {
      const checkIfAlreadExist = checkIfSaved();
      if (!checkIfAlreadExist) {
        dispatch(saveListMovie([...saveMovie, movie]));
      }
    } else {
      const checkIfAlreadExist = checkIfSaved();
      if (checkIfAlreadExist) {
        let filtered = saveMovie.filter((item: any) => {
          return item.id !== id;
        });
        dispatch(saveListMovie(filtered));
      }
    }
  };

  function checkIfSaved() {
    const isSaved = saveMovie.find((item: any) => item.id === id);
    return isSaved ? true : false;
  }

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
          <IconHeartContainer onPress={handlePressFavorite}>
            <Icon name={userSaved ? 'heart' : 'heart-outline'} />
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
      <ImageBackGround
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`,
        }}>
        <IconContainer onPress={() => navigation.goBack()}>
          <Icon name="arrow-left-circle" />
        </IconContainer>
      </ImageBackGround>
      <MainContainer />
    </Container>
  );
};

export default Details;
