import type {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainParamList>;
};

export type TabsParamList = {
  Home: undefined;
  Favorites: undefined;
};

export type MainParamList = {
  Principal: NavigatorScreenParams<TabsParamList>;
  MovieDetails: {
    id: number;
  };
};
