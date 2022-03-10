import {Dispatch} from 'react';

export interface SaveListMovieAction {
  readonly type: 'ON_SAVE_LIST_MOVIE';
  payload: Array<any>;
}

export interface SaveErrorAction {
  readonly type: 'ON_SAVE_ERROR';
  payload: any;
}

export type SaveMoviesAction = SaveListMovieAction | SaveErrorAction;

export const saveListMovie =
  (value: Array<any>) => async (dispatch: Dispatch<SaveMoviesAction>) => {
    try {
      dispatch({
        type: 'ON_SAVE_LIST_MOVIE',
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: 'ON_SAVE_ERROR',
        payload: error,
      });
    }
  };
