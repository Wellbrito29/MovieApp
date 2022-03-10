import styled from 'styled-components/native';
import theme from '@/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fonts from '@constants/fonts';

export const CardContainer = styled.View`
  height: 600px;
  background-color: ${({}) => theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({}) => theme.colors.background};
`;

export const Icon = styled(MaterialCommunityIcons).attrs({
  size: 42,
  color: theme.colors.purple,
})``;

export const IconContainer = styled.Pressable`
  margin-top: 52px;
  margin-left: 12px;
`;

export const MovieTitleContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const MovieYearContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const IconHeartContainer = styled.Pressable`
  margin-right: 32px;
`;

export const TitleText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 24px;
  color: ${({}) => theme.colors.white};
`;

export const TopicTitleText = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 18px;
  margin-top: 40px;
  margin-left: 18px;
  color: ${({}) => theme.colors.white};
`;
export const TopicTitleTextIcon = styled.Text`
  font-family: ${Fonts.Roboto_Bold};
  font-size: 18px;
  color: ${({}) => theme.colors.white};
`;

export const TitleIconContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 18px;
  flex-direction: row;
`;

export const TopicText = styled.Text`
  font-family: ${Fonts.Roboto_Medium};
  font-size: 14px;
  margin-top: 20px;
  margin-left: 18px;
  margin-right: 18px;
  color: ${({}) => theme.colors.white};
`;
export const TopicTextCount = styled.Text`
  font-family: ${Fonts.Roboto_Medium};
  font-size: 14px;
  margin-left: 18px;
  margin-right: 18px;
  color: ${({}) => theme.colors.white};
`;
