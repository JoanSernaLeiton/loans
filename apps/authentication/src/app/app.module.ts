import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { appRoutes } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability:true,
        strictStateSerializability:true,
        strictActionTypeUniqueness:true,
        strictActionImmutability:true,
        strictActionSerializability:true,
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge:25}),
    RouterModule.forRoot(
      [...appRoutes],
      { initialNavigation: 'enabledBlocking', }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
