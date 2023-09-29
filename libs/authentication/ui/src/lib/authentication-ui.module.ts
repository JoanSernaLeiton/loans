import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInContainerComponent } from './containers/sign-in-container/sign-in-container.component';
import { SignUpContainerComponent } from './containers/sign-up-container/sign-up-container.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthenticationFacadeModule } from '@authentication/facade';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedCoreUiModule } from "@shared/core/ui";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationFacadeModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    SharedCoreUiModule
  ],
  declarations: [
    SignInComponent,
    SignInContainerComponent,
    SignUpContainerComponent,
    SignUpComponent,
  ],
  exports: [SignInContainerComponent],
})
export class AuthenticationUiModule {}
