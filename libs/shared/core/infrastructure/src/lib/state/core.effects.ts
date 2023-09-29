import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as CoreActions from './core.actions';
import { of } from 'rxjs';
import { CoreService } from '../services/core/core.service';

@Injectable()
export class CoreEffects {
  GetUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoreActions.GetUserDetail),
      switchMap(() =>
        this.homeService.getUserDetail().pipe(
          map((user) => CoreActions.GetUserDetailSuccess({ user })),
          catchError((httpErrorResponse) => {
            const message =
              'message' in httpErrorResponse
                ? httpErrorResponse.message
                : httpErrorResponse.error.message;
            return of(
              CoreActions.GetUserDetailFailure({
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
      ofType(CoreActions.GetUserDetailFailure),
      tap(() => this.homeService.goToAuthentication())
    )
  ,{dispatch:false});

  constructor(
    private readonly actions$: Actions,
    private readonly homeService: CoreService,
  ) {}
}
