import { Route } from '@angular/router';
import { ProxyComponent } from '../proxy/proxy.component';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: ProxyComponent,
    children: [{ path: '', component: RemoteEntryComponent }],
  },
];
