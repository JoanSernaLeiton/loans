import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AUTH_KEY, authReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(AUTH_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [StoreModule]
})
export class AuthenticationInfrastructureModule {}
