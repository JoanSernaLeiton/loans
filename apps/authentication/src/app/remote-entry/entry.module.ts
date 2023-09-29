import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationUiModule, remoteRoutes } from '@authentication/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthenticationUiModule,
    RouterModule.forChild(remoteRoutes),
  ],
})
export class RemoteEntryModule {}
