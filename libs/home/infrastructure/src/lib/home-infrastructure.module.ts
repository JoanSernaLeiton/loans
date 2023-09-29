import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { HOME_KEY, homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { HomeService } from './services/home/home.service';

@NgModule({
  imports: [
    StoreModule.forFeature(HOME_KEY, homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    HttpClientModule,
  ],
  providers: [HomeService],
  exports: [StoreModule],
})
export class HomeInfrastructureModule {}
