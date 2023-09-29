import { createAction, props } from '@ngrx/store';
import { UserDetailEntity } from "@home/domain";

export const GetUserDetail = createAction('[Home] Get user detail');

export const GetUserDetailSuccess = createAction(
  '[Home] Get user detail' + ' success',
  props<{ user: UserDetailEntity }>()
);

export const GetUserDetailFailure = createAction(
  '[Home] Get user detail failure',
  props<{
    error: string;
  }>()
);
