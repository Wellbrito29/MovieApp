import type {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainParamList>;
};

export type TabsParamList = {
  Home: undefined;
  Favorites: undefined;
};

export type MainParamList = {
  Main: NavigatorScreenParams<TabsParamList>;
  Details: {
    id: number;
  };
};
