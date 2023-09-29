import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CORE_KEY, CoreState } from './core.reducer';

export const selectHomeState = createFeatureSelector<CoreState>(CORE_KEY);

export const selectUserDetail = createSelector(
  selectHomeState,
  (state) => state.user
);
