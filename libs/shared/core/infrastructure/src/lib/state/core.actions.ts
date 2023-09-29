import { createAction, props } from '@ngrx/store';
import { UserDetailEntity } from "@home/domain";

export const GetUserDetail = createAction('[Core] Get user detail');

export const GetUserDetailSuccess = createAction(
  '[Core] Get user detail' + ' success',
  props<{ user: UserDetailEntity }>()
);

export const GetUserDetailFailure = createAction(
  '[Core] Get user detail failure',
  props<{
    error: string;
  }>()
);
