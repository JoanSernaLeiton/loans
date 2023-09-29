import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  SignInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.SignInSuccess, AuthActions.SignUpSuccess),
        tap(({ token }) => this.authService.saveToken(token)),
        map(() => this.router.navigate(['/admin'])),
      ),
    { dispatch: false }
  );
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SignIn),
      switchMap(({ email, password }) =>
        this.authService
          .signIn({
            email,
            password,
          })
          .pipe(
            map((user) =>
              user
                ? AuthActions.SignInSuccess({ token: user.access_token })
                : AuthActions.SignInFailure({ error: 'Invalid credentials' })
            ),
            catchError((httpErrorResponse) =>
              of(AuthActions.SignInFailure({ error: httpErrorResponse.error }))
            )
          )
      )
    )
  );
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SignUp),
      switchMap(({ email, password, name, lastName }) =>
        this.authService
          .signUp({
            email,
            password,
            name,
            lastName,
          })
          .pipe(
            map((user) =>
              user
                ? AuthActions.SignUpSuccess({ token: user.access_token })
                : AuthActions.SignUpFailure({ error: 'Error creating user' })
            ),
            catchError((httpErrorResponse) =>
              of(AuthActions.SignUpFailure({ error: httpErrorResponse.error }))
            )
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}
}
