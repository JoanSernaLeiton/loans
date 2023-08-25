import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { ProxyComponent } from '../proxy/proxy.component';
import { ComponentAComponent } from '@home/ui';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: ProxyComponent,
    children: [
      {
        path: '',
        component: RemoteEntryComponent,
        children: [{ path: '', component: ComponentAComponent }],
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
