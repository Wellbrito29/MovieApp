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
