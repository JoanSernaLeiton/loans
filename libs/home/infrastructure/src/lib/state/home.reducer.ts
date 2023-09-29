import { createReducer, on } from '@ngrx/store';
import * as HomeActions from './home.actions';
import { UserDetailEntity } from "@home/domain";
export const HOME_KEY = 'home'
export interface HomeState {
  user: UserDetailEntity | null;
  error: string | null;
}

export const initialState: HomeState = {
  user: null,
  error: null,
};

export const homeReducer = createReducer(
  initialState,
  on(HomeActions.GetUserDetailSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(HomeActions.GetUserDetailFailure, (state, { error }) => ({
    ...state,
    user: null,
    error,
  }))
);
