import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
export const AUTH_KEY = 'auth'
export interface AuthState {
  token: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.SignInSuccess, (state, { token }) => ({
    ...state,
    token,
    error: null,
  })),
  on(AuthActions.SignInFailure, (state, { error }) => ({
    ...state,
    token: null,
    error,
  }))
);
