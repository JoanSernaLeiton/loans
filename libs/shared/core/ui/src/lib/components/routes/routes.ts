import { Route } from '@angular/router';
import { ProxyComponent } from './proxy/proxy.component';
import { RemoteEntryComponent } from './remote-entry/remote-entry.component';

export const remoteRoutesEntry = (routes: Route[]): Route[] => {
  return [
    {
      path: '',
      component: ProxyComponent,
      children: [
        {
          path: '',
          component: RemoteEntryComponent,
          children: routes,
        },
      ],
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
  ];
};
