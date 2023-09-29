import { ModuleWithProviders, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CORE_KEY, coreReducer } from './state/core.reducer';
import { CoreEffects } from './state/core.effects';
import { CoreService } from './services/core/core.service';
import {
  CoreTokenInterceptorService
} from "./interceptors/authentication/core-token-interceptor.service";

@NgModule({
  imports: [
    StoreModule.forFeature(CORE_KEY, coreReducer),
    EffectsModule.forFeature([CoreEffects]),
    HttpClientModule,
  ],
  providers: [CoreService],
  exports: [StoreModule],
})
export class SharedCoreInfrastructureModule {
  static forRoot(): ModuleWithProviders<SharedCoreInfrastructureModule> {
    return {
      ngModule: SharedCoreInfrastructureModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CoreTokenInterceptorService,
          multi: true
        }
      ]
    };
  }
}
