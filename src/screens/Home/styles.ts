import styled from 'styled-components/native';
import theme from '@/theme';
import SearchBar from 'react-native-dynamic-search-bar';
import Fonts from '@constants/fonts';

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
  placeholder: 'Search',
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
