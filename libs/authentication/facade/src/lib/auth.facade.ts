import { Injectable } from '@angular/core';
import * as AuthActions from '@authentication/infrastructure';
import { Store } from '@ngrx/store';
import { AuthenticationFacadeModule } from './authentication-facade.module';
import { SignInDTO, SignUpDTO } from '@authentication/domain';

@Injectable({ providedIn: AuthenticationFacadeModule })
export class AuthFacade {
  constructor(private readonly store: Store) {}

  signIn(signInDTO: SignInDTO): void {
    this.store.dispatch(AuthActions.SignIn(signInDTO));
  }
  signUp(signUpDTO:SignUpDTO): void {
    this.store.dispatch(AuthActions.SignUp(signUpDTO));
  }
}
