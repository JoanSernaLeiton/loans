import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.SignIn),
      switchMap(({email, password}) =>
        this.authService.login({
          email, password
        }).pipe(
          map((user) => (user ? AuthActions.SignInSuccess({token: user.token}) : AuthActions.SignInFailure({error: 'Invalid credentials'})))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
