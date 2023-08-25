import { createAction, props } from '@ngrx/store';
import { SignInDTO, SignUpDTO } from "@authentication/domain";

export const SignIn = createAction(
  '[Auth] SignIn',
  props<SignInDTO>()
);

export const  SignInSuccess = createAction(
  '[Auth] SignIn Success',
  props<{ token: string }>()
);

export const SignInFailure = createAction(
  '[Auth] SignIn Failure',
  props<{ error: string }>()
);
export const SignUp = createAction(
  '[Auth] SignUp',
  props<SignUpDTO>()
);

export const  SignUpSuccess = createAction(
  '[Auth] SignUp Success',
  props<{ token: string }>()
);

export const SignUpFailure = createAction(
  '[Auth] SignUp Failure',
  props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');
