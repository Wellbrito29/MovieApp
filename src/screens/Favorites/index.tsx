import React from 'react';
import {ApplicationState, saveListMovie} from '@/redux';
import {useDispatch, useSelector} from 'react-redux';
import {
  ImageHeader,
  Container,
  TopMovieTextContainer,
  TitleText,
  MovieCardWrapper,
  CardPopularMovie,
  TopMovieText,
  MovieFlatList,
  Icon,
  IconContainer,
  EmptyMovieText,
} from './styles';

const Favorites = () => {
  const {saveMovie} = useSelector(
    (state: ApplicationState) => state.saveMovieReducer,
  );
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    let filtered = saveMovie.filter((item: any) => {
      return item.id !== id;
    });
    dispatch(saveListMovie(filtered));
  };
  const renderItemMovies = ({item, index}: {item: any; index: number}) => {
    return (
      <MovieCardWrapper>
        <CardPopularMovie
          key={index}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          }}>
          <IconContainer onPress={() => handleDelete(item.id)}>
            <Icon name="close-circle" />
          </IconContainer>
          <TopMovieTextContainer>
            <TopMovieText>{item.title}</TopMovieText>
          </TopMovieTextContainer>
        </CardPopularMovie>
      </MovieCardWrapper>
    );
  };

  return (
    <Container>
      <ImageHeader source={require('@/images/default.jpeg')}>
        <TitleText>My Favorites Movies</TitleText>
      </ImageHeader>
      <React.Fragment>
        <MovieFlatList
          data={saveMovie}
          renderItem={renderItemMovies}
          ListEmptyComponent={() => (
            <EmptyMovieText>
              You haven't favorited any movie yet!!!
            </EmptyMovieText>
          )}
        />
      </React.Fragment>
    </Container>
  );
};

export default Favorites;
