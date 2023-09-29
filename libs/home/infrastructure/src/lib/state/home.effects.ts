import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as HomeActions from './home.actions';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { HomeService } from '../services/home/home.service';

@Injectable()
export class HomeEffects {
  GetUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.GetUserDetail),
      switchMap(() =>
        this.homeService.getUserDetail().pipe(
          map((user) => HomeActions.GetUserDetailSuccess({ user })),
          catchError((httpErrorResponse) => {
            const message =
              'message' in httpErrorResponse
                ? httpErrorResponse.message
                : httpErrorResponse.error.message;
            return of(
              HomeActions.GetUserDetailFailure({
                error: message,
              })
            );
          })
        )
      )
    )
  );
  GetUserDetailFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HomeActions.GetUserDetailFailure),
      tap(() => this.homeService.goToAuthentication())
    )
  ,{dispatch:false});

  constructor(
    private readonly actions$: Actions,
    private readonly homeService: HomeService,
  ) {}
}
