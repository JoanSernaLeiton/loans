import { createReducer, on } from '@ngrx/store';
import * as CoreActions from './core.actions';
import { UserDetailEntity } from "@shared/core/domain";
export const CORE_KEY = 'core'
export interface CoreState {
  user: UserDetailEntity | null;
  error: string | null;
}

export const initialState: CoreState = {
  user: null,
  error: null,
};

export const coreReducer = createReducer(
  initialState,
  on(CoreActions.GetUserDetailSuccess, (state, { user }) => ({
    ...state,
    user,
    error: null,
  })),
  on(CoreActions.GetUserDetailFailure, (state, { error }) => ({
    ...state,
    user: null,
    error,
  }))
);
