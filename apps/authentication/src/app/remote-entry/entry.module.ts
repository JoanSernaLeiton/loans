import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteEntryComponent } from './entry.component';
import { AuthenticationUiModule } from '@authentication/ui';
import { ProxyComponent } from '../proxy/proxy.component';
import { RouterModule } from '@angular/router';
import { remoteRoutes } from './entry.routes';

@NgModule({
  declarations: [RemoteEntryComponent, ProxyComponent],
  imports: [
    CommonModule,
    AuthenticationUiModule,
    RouterModule.forChild(remoteRoutes),
  ],
})
export class RemoteEntryModule {}
