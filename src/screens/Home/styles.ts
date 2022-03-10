import styled from 'styled-components/native';
import theme from '@/theme';
import SearchBar from 'react-native-dynamic-search-bar';
import Fonts from '@constants/fonts';
import {ImageBackground, FlatList} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({}) => theme.colors.background};
`;

export const SearchContainer = styled.View`
  width: 100%;
  margin-top: 80px;
`;

export const SearchBarComponent = styled(SearchBar).attrs({
  placeholder: 'Search movie by name or year',
  darkMode: true,
  textInputStyle: {
    fontFamily: Fonts.Roboto_Medium,
  },
})`
  height: 55px;
`;

export const CarouselTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  color: ${({}) => theme.colors.white};
`;

export const CarouselTitleContainer = styled.View`
  width: 90%;
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

export const TopMovieText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  margin-top: 40px;
  margin-left: 18px;
  color: ${({}) => theme.colors.white};
`;

export const EmptyMovieText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  align-self: center;
  color: ${({}) => theme.colors.white};
  margin-top: 40px;
`;

export const TopMovieTextContainer = styled.View`
  width: 90%;
  position: absolute;
  bottom: 20px;
  justify-content: center;
`;

export const PopularMovieText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  margin-top: 40px;
  margin-left: 18px;
  color: ${({}) => theme.colors.white};
`;

export const CardParallax = styled.View`
  width: 100%;
  height: 100%;
`;

export const CarouselContainer = styled.View`
  width: 100%;
  height: 180px;
  margin-top: 20px;
`;

export const MainScroll = styled.ScrollView`
  flex: 1;
  background-color: ${({}) => theme.colors.background};
`;

export const CardPopularMovie = styled(ImageBackground).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  box-shadow: 5px 5px 15px black;
  overflow: hidden;
`;

export const MovieFlatList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 20px;
`;

export const MovieCardWrapper = styled.Pressable`
  width: 50%;
  margin-bottom: 20px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const MovieTopCardWrapper = styled.Pressable`
  flex: 1;
`;
