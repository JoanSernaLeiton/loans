import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AUTH_KEY, authReducer } from './state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";

@NgModule({
  imports: [
    StoreModule.forFeature(AUTH_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [StoreModule]
})
export class AuthenticationInfrastructureModule {}
