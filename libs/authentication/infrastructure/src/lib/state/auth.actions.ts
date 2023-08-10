import { createAction, props } from '@ngrx/store';

export const SignIn = createAction(
  '[Auth] SignIn',
  props<{ email: string; password: string }>()
);

export const  SignInSuccess = createAction(
  '[Auth] SignIn Success',
  props<{ token: string }>()
);

export const SignInFailure = createAction(
  '[Auth] SignIn Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
