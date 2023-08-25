import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import { RemoteEntryComponent } from './entry.component';
import { ProxyComponent } from '../proxy/proxy.component';
import { HomeUiModule } from '@home/ui';

@NgModule({
  declarations: [RemoteEntryComponent, ProxyComponent],
  imports: [CommonModule, HomeUiModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
