import {SaveMoviesAction} from '../actions/saveMoviesAction';

type MovieState = {
  saveMovie: Array<any>;
  saveError?: string | undefined;
};

const initialState: MovieState = {
  saveMovie: [],
  saveError: undefined,
};

const SaveMovieReducer = (
  state: MovieState = initialState,
  action: SaveMoviesAction,
) => {
  switch (action.type) {
    case 'ON_SAVE_LIST_MOVIE':
      return {
        ...state,
        saveMovie: action.payload,
      };
    case 'ON_SAVE_ERROR':
      return {
        ...state,
        saveError: action.payload,
      };
    default:
      return state;
  }
};

export {SaveMovieReducer};
