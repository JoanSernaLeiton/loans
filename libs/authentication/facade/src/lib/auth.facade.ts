import {Injectable} from '@angular/core';
import * as AuthActions from "@authentication/infrastructure";
import {Store} from "@ngrx/store";

@Injectable({providedIn: 'root'})
export class AuthFacade {
  constructor(
    private readonly store: Store
  ) {
  }

  login(email: string, password: string): void {
    this.store.dispatch(AuthActions.SignIn({email, password}))
  }
}
