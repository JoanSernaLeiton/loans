import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_KEY, HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>(HOME_KEY);

export const selectUserDetail = createSelector(
  selectHomeState,
  (state) => state.user
);
