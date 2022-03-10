import styled from 'styled-components/native';
import theme from '@/theme';
import {ImageBackground, FlatList} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '@constants/fonts';
export const ImageHeader = styled(ImageBackground).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({}) => theme.colors.background};
`;

export const TitleText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 32px;
  margin-top: 40px;
  margin-left: 18px;
  color: ${({}) => theme.colors.white};
`;
export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 42,
  color: theme.colors.red,
})``;

export const MovieFlatList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const IconContainer = styled.Pressable`
  align-self: flex-end;
  margin-left: 40px;
`;

export const MovieCardWrapper = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

export const CardPopularMovie = styled(ImageBackground).attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  box-shadow: 5px 5px 15px black;
  overflow: hidden;
  justify-content: space-between;
  flex-direction: column;
`;

export const TopMovieTextContainer = styled.View`
  width: 90%;
  bottom: 20px;
  justify-content: center;
  align-items: center;
`;

export const TopMovieText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  margin-top: 40px;
  color: ${({}) => theme.colors.white};
`;

export const EmptyMovieText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  margin-top: 80px;
  color: ${({}) => theme.colors.white};
  width: 90%;
  align-self: center;
`;
