import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '@data/services/user.service';
import { login, loginSuccess, loginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        this.userService.login(email, password).pipe(
          map((user) => (user ? loginSuccess({ token: user.id }) : loginFailure({ error: 'Invalid credentials' })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private userService: UserService) {}
}
