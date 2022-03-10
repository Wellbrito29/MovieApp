import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {SaveMovieReducer} from './saveMoviesReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['saveMovie'],
};

const rootReducer = combineReducers({
  saveMovieReducer: persistReducer(persistConfig, SaveMovieReducer),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer};
